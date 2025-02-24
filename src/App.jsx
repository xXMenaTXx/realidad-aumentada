import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
