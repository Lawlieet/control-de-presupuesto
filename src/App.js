import React, { useState,useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControPresupuesto from './components/ControPresupuesto';


function App() {

  // Definir el state
  const [ presupuesto, setGuardarPresupuesto] = useState(0);
  const [restante, setGuardarRestante] = useState(0);
  const [ mostrarpregunta, setActualizarPregunta] = useState(true);
  const [gastos, setGuardarGastos] = useState([]);
  const [ gasto, setGuardarGasto] = useState({});
  const [ creargasto, setGuardarCrearGasto] = useState(false);

  // UseEffect para actualizar restante
  useEffect( () =>{
    if(creargasto){
      // Agrega el nuevo presupuesto
      setGuardarGastos([
        ...gastos, 
        gasto
      ]);
      // Resta el prespuesto Actual
      const presupuestoRestante = restante -gasto.cantidad
      setGuardarRestante(presupuestoRestante);


      setGuardarCrearGasto(false)
    }
  },[gasto, creargasto, gastos, restante])

 
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
                    setGuardarGasto= {setGuardarGasto}
                    setGuardarCrearGasto={setGuardarCrearGasto}
                    
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
