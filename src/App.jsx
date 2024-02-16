import { useEffect, useState } from 'react'

import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';

import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Filtros from './components/Filtros';

function App() {
  const [ presupuesto, setPresupuesto ] = useState(
    Number( localStorage.getItem('presupuesto')) ?? 0
    );
  const [ gastos , setGastos ] = useState( 
      localStorage.getItem('gastos') ? JSON.parse( localStorage.getItem('gastos') ) : []
  )
  const [ isValidPresupuesto , setIsValidPresupuesto ] = useState( false );
  const [ modal , setModal ] = useState( false );
  const [ animarModal , setAnimarModal ] = useState( false );
  const [ editarGasto , setEditarGasto ] = useState( { } );
  const [ filtro , setFiltro ] = useState('');
  const [ gastosFiltrados , setGastosFiltrados ] = useState([]);

  useEffect( () => {
    if( Object.keys( editarGasto ).length > 0 ){
      setModal(true)
      setTimeout( ( ) => {
        setAnimarModal( true )
      }, 300 )
    } 
  } , [ editarGasto ])

  const handleAbrirModal = () => {
    setModal(true)
    setEditarGasto({});
    setTimeout( ( ) => {
      setAnimarModal( true )
    }, 300 )
  }

  const guardarGasto = gasto => {
    if( gasto.id ){
      const gastoActualizado = gastos.map( ( gastoState ) => gastoState.id === gasto.id ? gasto : gastoState );
      setGastos( gastoActualizado );
      setEditarGasto( {} );
    }else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos( [...gastos , gasto] );
    }
    setAnimarModal( false );
    setTimeout( () => {
        setModal( false );
    }, 300 )
  }

  const eliminarGasto = idGasto => {
    const gastosActualizados = gastos.filter( ( gastosActuales ) => gastosActuales.id !== idGasto );
    setGastos( gastosActualizados );
  }

  useEffect( () => {
    localStorage.setItem('presupuesto' , presupuesto );
  } , [ presupuesto ] )

  useEffect( () => {
    localStorage.setItem('gastos' , JSON.stringify( gastos ) ?? [] );
  } , [ gastos ] )

  useEffect( () => {
    if( filtro.length > 0 ){
      const gastosFiltradosArray = gastos.filter( gasto => gasto.categoria === filtro );
      setGastosFiltrados( gastosFiltradosArray );
    }
  }, [ filtro ])

  useEffect( () => {
    const presupuestoLS = Number( localStorage.getItem('presupuesto') );
    console.log( presupuestoLS , "presupuestoLS")
    if( presupuestoLS >  0 ){
      setIsValidPresupuesto( true );
    }
  } , [  ] )

  return (
    <div className={ modal ? 'fijar' : ''}>
     <Header
        gastos={ gastos }
        setGastos={ setGastos }
        presupuesto={ presupuesto }
        setPresupuesto={ setPresupuesto }
        isValidPresupuesto={ isValidPresupuesto }
        setIsValidPresupuesto={ setIsValidPresupuesto }/>

      { isValidPresupuesto && ( 
        <>
          <main>
            <Filtros 
              filtro={ filtro }
              setFiltro={ setFiltro }
            />
            <ListadoGastos 
              gastos={ gastos }
              setEditarGasto={ setEditarGasto }
              eliminarGasto={ eliminarGasto }
              filtro={ filtro }
              gastosFiltrados={ gastosFiltrados } />
          </main>
          <div className="nuevo-gasto">
              <img 
                src={ IconoNuevoGasto } 
                alt="icono nuevo gasto" 
                onClick={ handleAbrirModal }
              />
          </div>
        </>
      )}

      { modal && <Modal 
                    setModal={ setModal }
                    animarModal={ animarModal }
                    setAnimarModal={ setAnimarModal }
                    guardarGasto={ guardarGasto }
                    editarGasto={ editarGasto }
                    setEditarGasto={ setEditarGasto }
                  />}
    </div>
  )
}

export default App
