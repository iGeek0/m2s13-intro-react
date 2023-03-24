import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TituloClase from './components/TituloClase';
import TituloFuncional from './components/TituloFuncional';
import CustomImput from './components/CustomImput';
import { useState } from 'react';

function App() {

  // Esto es una variable de estado.
  const [color, setColor] = useState('Light');

  function simpleClick() {
    // este es el clicl del boton primary
    console.log("Entro a simple click!!");
    setColor("Primary");
  }

  function saludarPersona(nombre) {
    console.log("Hola, " + nombre);
  }

  function overButton() {
    console.log("Entro al boton, con over!!!!");
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-success">Este es el componente app</h1>
          <TituloClase></TituloClase>
          <TituloFuncional />

          <button type="button" className="btn btn-primary me-2"
            onClick={simpleClick}>Primary</button>

          <button type="button" className="btn btn-secondary me-2"
            onClick={() => { saludarPersona("Jesus") }}>Secondary</button>

          <button type="button" className="btn btn-success me-2" onMouseEnter={overButton}>Success</button>

          <button type="button" className="btn btn-danger me-2">Danger</button>

          <button type="button" className="btn btn-warning me-2">Warning</button>

          <button type="button" className="btn btn-info me-2">Info</button>

          <button type="button" className="btn btn-light me-2">Light</button>

          <button type="button" className="btn btn-dark">Dark</button>

          <h1>Aprendiento eventos y componentes</h1>
          <CustomImput></CustomImput>
          <div className="row text-center">
            <div className="col-md-12">
              <h1>El valor de la variable de estado es: {color}</h1>
              <button type="button" className="btn btn-light me-2" onClick={()=>{setColor('Ligth')}}>{color}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
