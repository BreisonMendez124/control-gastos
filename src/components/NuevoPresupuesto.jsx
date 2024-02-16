import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto , setPresupuesto , setIsValidPresupuesto }) => {

    const [ mensajeError , setMensajeError ] = useState("");

    const handlePresupuesto = ( e ) => {

        e.preventDefault();

        if( !presupuesto || presupuesto < 0 ){
            setMensajeError( "No es presupuesto valido ")
            return;
        }

        setMensajeError('')
        setIsValidPresupuesto( true )

    }
    return ( 
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={ handlePresupuesto } className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir presupuesto</label>
                    <input 
                        type="number" 
                        className="nuevo-presupuesto"
                        placeholder="Agrega tu presupuesto"
                        onChange={ e => setPresupuesto( Number( e.target.value ) )} />
                </div>

                <input type="submit" value="Agregar" />
                { 
                    mensajeError && 
                    <Mensaje tipo="error" > { mensajeError } </Mensaje> 
                }
                
            </form>

        </div>
    )

}

export default NuevoPresupuesto;