import './App.css';
import TituloClase from './components/TituloClase';
import TituloFuncional from './components/TituloFuncional';

function App() {
  return (
    <div className="App">
      <h1>Este es el componente app</h1>
      <TituloClase></TituloClase>
      <TituloFuncional/>
    </div>
  );
}

export default App;
