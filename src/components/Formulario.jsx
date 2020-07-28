import React,{useState} from 'react'
import Error from './Error'

const Formulario = () => {

    const [ nombre, setGuardarNombre] = useState('');
    const [ cantidad, setGuardarCantidad] = useState(0);
    const [ error, setGuardarError] = useState(false);
    // Cuando se agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setGuardarError(true);
            return            
        }

        // Construit gasto

        // Pasar al componente principal

        // Reset al formulario

    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {
                error ? (  <Error mensaje="Ambos Campos son Obligatorios o Presupuesto Incorrecto"/> )
                : null
            }

            <label>Nombre Gasto</label>
            <div className="campo">
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Comida"
                    value={nombre}
                    onChange={e => setGuardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidas Gasto</label>
                
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="100"
                    value={cantidad}
                    onChange={e => setGuardarCantidad(parseInt(e.target.value,10))}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agergar Gasto"
            />
        </form>
    );
}

export default Formulario
