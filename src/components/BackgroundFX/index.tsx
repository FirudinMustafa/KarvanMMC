import Blobs from "./Blobs";
import CaravanPath from "./CaravanPath";
import GradientWaves from "./GradientWaves";
import Particles from "./Particles";

export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ contain: "strict" }}
    >
      <GradientWaves />
      <Blobs />
      <CaravanPath />
      <Particles count={26} />
    </div>
  );
}
