import type { ThreeEvent } from '@react-three/fiber';
const BODY_COLOR = '#2b2f36';
const SELECTED_COLOR = '#00aaff';
export function CarModel({ selectedId, onSelect }: { selectedId: string | null, onSelect: (id: string) => void }) {
  const mat = (id: string) => (<meshStandardMaterial color={selectedId === id ? SELECTED_COLOR : BODY_COLOR} metalness={0.6} roughness={0.4} />);
  const handleClick = (id: string) => (e: ThreeEvent<MouseEvent>) => { e.stopPropagation(); onSelect(id); };
  return (
    <group>
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow><boxGeometry args={[4.2, 0.7, 1.8]} /><meshStandardMaterial color={BODY_COLOR} metalness={0.6} roughness={0.4} /></mesh>
      <mesh position={[0, 1.05, 0]} castShadow><boxGeometry args={[2.2, 0.5, 1.6]} /><meshStandardMaterial color={BODY_COLOR} metalness={0.6} roughness={0.4} /></mesh>
      <mesh position={[1.7, 0.9, 0]} onClick={handleClick('hood')} castShadow><boxGeometry args={[0.9, 0.1, 1.7]} />{mat('hood')}</mesh>
      <mesh position={[2.15, 0.45, 0]} onClick={handleClick('bumper_front')} castShadow><boxGeometry args={[0.25, 0.5, 1.8]} />{mat('bumper_front')}</mesh>
      <mesh position={[-2.15, 0.45, 0]} onClick={handleClick('bumper_rear')} castShadow><boxGeometry args={[0.25, 0.5, 1.8]} />{mat('bumper_rear')}</mesh>
      {([['door_front_left', 0.9, 0.9], ['door_rear_left', -0.9, 0.9], ['door_front_right', 0.9, -0.9], ['door_rear_right', -0.9, -0.9]] as const).map(([id, x, z]) => (
        <mesh key={id} position={[x, 0.65, z]} onClick={handleClick(id)} castShadow><boxGeometry args={[1.4, 0.6, 0.08]} />{mat(id)}</mesh>
      ))}
      {([['wheel_front_left', 1.4, 1.0], ['wheel_front_right', 1.4, -1.0], ['wheel_rear_left', -1.4, 1.0], ['wheel_rear_right', -1.4, -1.0]] as const).map(([id, x, z]) => (
        <mesh key={id} position={[x, 0.35, z]} rotation={[Math.PI / 2, 0, 0]} onClick={handleClick(id)} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.25, 24]} /><meshStandardMaterial color={selectedId === id ? SELECTED_COLOR : '#111'} metalness={0.3} roughness={0.8} />
        </mesh>
      ))}
      {([['headlight_left', 2.05, 0.65], ['headlight_right', 2.05, -0.65]] as const).map(([id, x, z]) => (
        <mesh key={id} position={[x, 0.75, z]} onClick={handleClick(id)}><boxGeometry args={[0.1, 0.2, 0.35]} /><meshStandardMaterial color={selectedId === id ? SELECTED_COLOR : '#fff7c2'} emissive={selectedId === id ? SELECTED_COLOR : '#222200'} /></mesh>
      ))}
      {([['taillight_left', -2.05, 0.65], ['taillight_right', -2.05, -0.65]] as const).map(([id, x, z]) => (
        <mesh key={id} position={[x, 0.75, z]} onClick={handleClick(id)}><boxGeometry args={[0.1, 0.2, 0.35]} /><meshStandardMaterial color={selectedId === id ? SELECTED_COLOR : '#b30000'} emissive={selectedId === id ? SELECTED_COLOR : '#330000'} /></mesh>
      ))}
      <mesh position={[1.6, 0.55, 0]} onClick={handleClick('engine')}><boxGeometry args={[0.6, 0.3, 0.8]} /><meshStandardMaterial color={selectedId === 'engine' ? SELECTED_COLOR : '#555'} metalness={0.8} roughness={0.2} /></mesh>
    </group>
  );
}
