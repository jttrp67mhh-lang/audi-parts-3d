import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Environment } from '@react-three/drei';
import { CarModel } from './CarModel';
export function Scene({ selectedId, onSelect }: { selectedId: string | null, onSelect: (id: string) => void }) {
  return (
    <Canvas shadows camera={{ position: [5, 3.5, 6], fov: 45 }} onPointerMissed={() => onSelect('')}>
      <color attach="background" args={['#1a1d21']} />
      <hemisphereLight intensity={0.6} groundColor="#222" />
      <directionalLight position={[6, 10, 5]} intensity={1.5} castShadow />
      <Environment preset="city" />
      <CarModel selectedId={selectedId} onSelect={onSelect} />
      <Grid args={[20, 20]} cellColor="#333" sectionColor="#555" position={[0, -0.01, 0]} fadeDistance={25} />
      <OrbitControls enableDamping minDistance={3} maxDistance={15} maxPolarAngle={Math.PI / 2 - 0.05} />
    </Canvas>
  );
}
