import { useRef, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';
import Robot from './models/Robot';


import './App.css'




function App() {
  const roboRef = useRef();
  const [currentAnimation, setCurrentAnimation] = useState('Animation');
  return (
    <>
      
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 50 }}
        style={{ backgroundColor: '#45badd' }}
      >
      <Suspense fallback={null}>
        <Stage control={roboRef} preset="rembrandt" intensity={1} shadows={false} environment="city">
          <Robot
            scale={1}
            currentAnimation={currentAnimation}
          />
        </Stage>
      </Suspense>
      <OrbitControls ref={roboRef} autoRotate />
      </Canvas>
      
    </>
  )
}

export default App
