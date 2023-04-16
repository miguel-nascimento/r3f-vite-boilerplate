import { Canvas } from '@react-three/fiber';
import { Box } from './Box';
import { OrbitControls } from '@react-three/drei';

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default App;
