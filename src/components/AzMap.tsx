import { readFileSync } from "node:fs";
import path from "node:path";
import AzMapClient from "./AzMapClient";

export default function AzMap() {
  const svg = readFileSync(
    path.join(process.cwd(), "public", "map", "azerbaijan.svg"),
    "utf8",
  );
  return <AzMapClient svg={svg} />;
}
