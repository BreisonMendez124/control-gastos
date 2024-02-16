import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatearFecha  } from "../helpers";

import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';


const Gasto = ({ gasto , setEditarGasto , eliminarGasto }) => {
  const { nombreGasto , cantidad , categoria , id , fecha } = gasto;

  const iconosPorCategoria = {
    'ahorro': IconoAhorro,
    'casa': IconoCasa,
    'comida': IconoComida,
    'gastos': IconoGastos,
    'ocio': IconoOcio,
    'salud': IconoSalud,
    'suscripciones': IconoSuscripciones
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={ () => setEditarGasto( gasto ) } >
        Agregar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
          onClick={ () => eliminarGasto( id )}
          destructive={ true } >
        Borrar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem 
         leadingActions={leadingActions()}
         trailingActions={trailingActions()}
        >
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img 
                    src={ iconosPorCategoria[ categoria ] } 
                    alt="Icono gasto" 
                />
                <div className="descripcion-gasto">
                    <p className="categoria">{ categoria }</p>
                    <p className="nombre-gasto">{ nombreGasto }</p>
                    <p className="fecha-gasto">
                      Agregado el: {' '}
                      <span>{ formatearFecha( fecha )}</span>
                    </p>

                </div>
            </div>
                <p className="cantidad-gasto">${ cantidad }</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
export default Gasto;