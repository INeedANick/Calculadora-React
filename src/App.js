import './App.css';
import logo from "./Imagenes/logo.png"
import Boton from './componentes/boton'

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
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
