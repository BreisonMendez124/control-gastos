import { useEffect, useState } from 'react';
import iconoCerrar from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({ setModal , animarModal , setAnimarModal , guardarGasto , editarGasto , setEditarGasto }) => {

    const [ mensaje , setMensaje ] = useState('');
    const [ nombreGasto , setNombreGasto ] = useState('');
    const [ cantidad , setCantidad ] = useState('');
    const [ categoria , setCategoria ] = useState('');
    const [ fecha , setFecha ] = useState('');
    const [ id , setId ] = useState('');

    useEffect( ( ) => {
        Object.keys( editarGasto ).length > 0 && 
        ( setNombreGasto( editarGasto.nombreGasto ),
          setCantidad( editarGasto.cantidad ),
          setCategoria( editarGasto.categoria ),
          setFecha( editarGasto.fecha ) ,
          setId( editarGasto.id ) 
        );
    } , [] )

    const handleCerrarModal = ( ) => {
        setAnimarModal( false );
        setEditarGasto({});
        setTimeout( () => {
            setModal( false );
        }, 300 )
    }

    const handleSubmitGasto = e => {
        e.preventDefault();
        if( [ nombreGasto , cantidad , categoria ].includes('') ){
            setMensaje('Todos los campos son obligatorios');

            setTimeout( ( ) => {
                setMensaje('');
            }, 2500);
            return;
        }
        guardarGasto({ nombreGasto , cantidad , categoria , id , fecha })
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={ iconoCerrar } 
                    alt="boton cerrar"
                    onClick={ handleCerrarModal } />
            </div>

            <form 
                onSubmit={ handleSubmitGasto }
                className={`formulario ${ animarModal ? 'animar' : 'cerrar' }`}>

                { mensaje && 
                    <Mensaje tipo={'error'}> { mensaje } </Mensaje> 
                }
                <legend> { editarGasto.nombre ? 'Editar gasto' : 'Nuevo gasto'} </legend>

                <div className="campo">
                    <label htmlFor="nombreGasto">Nombre gasto </label>
                    <input 
                        type="text" 
                        id='nombreGasto'
                        placeholder='Agrega el nuevo gasto'
                        value={ nombreGasto }
                        onChange={ ( event ) => setNombreGasto( event.target.value )} />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad </label>
                    <input 
                        type="number" 
                        id='cantidad' 
                        placeholder='Agrega la cantidad ej: 300'
                        value={ cantidad }
                        onChange={ ( event ) => setCantidad( Number( event.target.value ) )  } />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria </label>
                    <select 
                        id="categoria"
                        value={ categoria }
                        onChange={ ( event ) => setCategoria( event.target.value )}>
                            <option value="">--- Selecione ---</option>
                            <option value="ahorro">Ahorro</option>
                            <option value="casa">Casa</option>
                            <option value="comida">Comida</option>
                            <option value="gastos">Gastos</option>
                            <option value="ocio">Ocio</option>
                            <option value="salud">Salud</option>
                            <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value={ editarGasto.nombreGasto ? 'Guardar cambios' : 'Agregar gasto'} />
            </form>
        </div>
    )
}

export default Modal;