"""
Compress all PDFs in assets/catalogs/ so each stays under 100 MB for GitHub.

Strategy: re-render every page at DPI=150 as a JPEG (quality=78) and rebuild
the PDF. Text selection is lost, but visual quality remains good for a
product catalog and file sizes drop dramatically.

Originals are backed up to assets/catalogs/_originals/ before overwriting.
"""
import io
import os
import shutil
import sys
import time

import fitz  # PyMuPDF
from PIL import Image

CATALOG_DIR = os.path.join("assets", "catalogs")
BACKUP_DIR = os.path.join(CATALOG_DIR, "_originals")
DPI = 150
JPEG_QUALITY = 78
LIMIT_MB = 95  # stay comfortably under GitHub's 100 MB hard cap


def mb(path):
    return os.path.getsize(path) / (1024 * 1024)


def render_compress(src_path, dst_path, dpi=DPI, quality=JPEG_QUALITY):
    src = fitz.open(src_path)
    dst = fitz.open()
    for page in src:
        pix = page.get_pixmap(dpi=dpi, alpha=False)
        img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
        buf = io.BytesIO()
        img.save(buf, format="JPEG", quality=quality, optimize=True)
        jpeg_bytes = buf.getvalue()

        # New page sized so JPEG at `dpi` renders to match original page
        w_pt = pix.width * 72 / dpi
        h_pt = pix.height * 72 / dpi
        new_page = dst.new_page(width=w_pt, height=h_pt)
        new_page.insert_image(new_page.rect, stream=jpeg_bytes)

    dst.save(dst_path, garbage=4, deflate=True, clean=True)
    dst.close()
    src.close()


def main():
    if not os.path.isdir(CATALOG_DIR):
        print(f"[!] Not found: {CATALOG_DIR}")
        sys.exit(1)

    os.makedirs(BACKUP_DIR, exist_ok=True)

    pdfs = sorted(
        f for f in os.listdir(CATALOG_DIR)
        if f.lower().endswith(".pdf") and os.path.isfile(os.path.join(CATALOG_DIR, f))
    )
    if not pdfs:
        print("[!] No PDFs found.")
        return

    total_before = 0
    total_after = 0
    for fname in pdfs:
        src = os.path.join(CATALOG_DIR, fname)
        before = mb(src)
        total_before += before

        if before <= LIMIT_MB:
            print(f"  skip   {fname:<28} {before:7.1f} MB  (already under limit)")
            total_after += before
            continue

        backup = os.path.join(BACKUP_DIR, fname)
        if not os.path.exists(backup):
            shutil.copy2(src, backup)

        tmp = src + ".tmp.pdf"
        t0 = time.time()
        try:
            render_compress(src, tmp)
        except Exception as e:
            print(f"  FAIL   {fname:<28} {e}")
            if os.path.exists(tmp):
                os.remove(tmp)
            total_after += before
            continue

        after = mb(tmp)
        os.replace(tmp, src)
        dt = time.time() - t0
        print(f"  ok     {fname:<28} {before:7.1f} MB -> {after:6.1f} MB  ({dt:5.1f}s)")
        total_after += after

    print("-" * 64)
    print(f"  TOTAL                                 "
          f"{total_before:7.1f} MB -> {total_after:6.1f} MB")
    print(f"  Backups in: {BACKUP_DIR}")


if __name__ == "__main__":
    main()
