import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useLabStore } from "../../store/labStore";
import type { LabState } from "../../store/labStore";
import { Suspense } from "react";
import StaticTable from "./StaticTable";
import EquipmentInstances from "./EquipmentInstances";

function Playground() {
  const placedEquipment = useLabStore((state: LabState) => state.placedEquipment);

  return (
    <div className="relative flex-1">
      <Canvas shadows camera={{ position: [6, 6, 6], fov: 50 }}>
        <color attach="background" args={["#1F2937"]} />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[8, 12, 8]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={1.2}
        />

        <Suspense fallback={null}>
          <StaticTable />
          <EquipmentInstances items={placedEquipment} />
          <Environment preset="warehouse" />
        </Suspense>

        <OrbitControls enableDamping enablePan maxDistance={20} minDistance={4} />
      </Canvas>
    </div>
  );
}

export default Playground;
