import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';


function App() {

  // Definir el state
  const [ presupuesto, setGuardarPresupuesto] = useState(0);
  const [restante, setGuardarRestante] = useState(0);
  const [ mostrarpregunta, setActualizarPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          { 
            mostrarpregunta ? (
              <Pregunta
                setGuardarPresupuesto = { setGuardarPresupuesto }
                setGuardarRestante = { setGuardarRestante }
                setActualizarPregunta = { setActualizarPregunta }
              />
            ) : (
              <div className="row">
                <div className="one-half column"> <Formulario/> </div>
                <div className="one-half column">2</div>
              </div>
            )
          }
          
         

          

        </div>
      </header>
    </div>
  );
}

export default App;
