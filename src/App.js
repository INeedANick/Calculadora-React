import './App.css';
import logo from "./Imagenes/logo.png"

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src = {logo}
          className='Logo'
          alt='logo'
        />
      </div>
      <div className='calculadora-contenedor'>

      </div>
    </div>
  );
}

export default App;
