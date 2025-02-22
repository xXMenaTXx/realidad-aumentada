import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ARButton, XR } from '@react-three/xr';

import { useEffect, useState } from 'react';

function Model() {
  const { scene } = useGLTF('/model.glb'); // Carga el modelo 3D
  return <primitive object={scene} scale={0.5} />;
}

export default function ARScene() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
  }, []);

  if (isIOS) {
    return (
      <model-viewer
        src="/model.glb"
        ar
        ar-modes="quick-look"
        camera-controls
        auto-rotate
        style={{ width: '100vw', height: '100vh' }}
      />
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ARButton sessionInit={{ requiredFeatures: ['hit-test'] }} />
      <Canvas>
        <XR>
          <ambientLight intensity={0.5} />
          <pointLight position={[2, 2, 2]} intensity={1} />
          <Model />
        </XR>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
