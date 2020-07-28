import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControPresupuesto from './components/ControPresupuesto';


function App() {

  // Definir el state
  const [ presupuesto, setGuardarPresupuesto] = useState(0);
  const [restante, setGuardarRestante] = useState(0);
  const [ mostrarpregunta, setActualizarPregunta] = useState(true);
  const [gastos, setGuardarGastos] = useState([])

  // Cuando Se agrege un gasto
  const agregarNuevoGasto = gasto => {
    setGuardarGastos([
      ...gastos, 
      gasto
    ])
  } 

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
                <div className="one-half column"> 
                  <Formulario
                    agregarNuevoGasto= {agregarNuevoGasto}
                  /> 
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <ControPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
          
         

          

        </div>
      </header>
    </div>
  );
}

export default App;
