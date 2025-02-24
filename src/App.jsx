import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [mostrarAR, setMostrarAR] = useState(false);

  const abrirAR = () => {
    setMostrarAR(true);
  };
  const cerrarAR = () => {
    setMostrarAR(false);
  };
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <button onClick={abrirAR}>Abrir Cámara AR</button>
        <button onClick={cerrarAR}>Cerrar Cámara AR</button>
        {mostrarAR && (
          <model-viewer
            src="/model.glb" // Modelo 3D en formato GLB
            ios-src="/manijas.usdz" // Modelo en formato USDZ para iOS
            ar // Habilita AR
            ar-modes="scene-viewer quick-look webxr"
            camera-controls // Permite controles de cámara
            style={{ width: '100%', height: '500px' }}
          ></model-viewer>
        )}
      </div>
    </>
  );
}

export default App;
