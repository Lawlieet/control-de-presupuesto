import React, { Fragment,useState } from 'react';
import Error from './Error'

const Pregunta = ({setGuardarRestante,setGuardarPresupuesto, setActualizarPregunta }) => {

    const [cantidad, setGuardarCantidad] = useState(0);
    const [ error, setGuardarError] = useState(false);


    // F que lee el presupuesto
    const definirPresupuesto = e => {
        setGuardarCantidad( parseInt(e.target.value,10));
    }
    // Submit del presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)) {
            setGuardarError(true);
            return;
        }

        // Si pasa la validación
        setGuardarError(false);
        setGuardarPresupuesto(cantidad);
        setGuardarRestante(cantidad);
        setActualizarPregunta(false);
    }


    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
                {
                    error 
                    ? <Error mensaje="El Presupuesto Es Incorrecto"/> 
                    : null
                }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type='number'
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    placeholder="Presupuesto"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta
