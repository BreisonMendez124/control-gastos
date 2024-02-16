import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({ 
    gastos,
    setGastos,
    presupuesto , 
    setPresupuesto , 
    isValidPresupuesto , 
    setIsValidPresupuesto }) => {

    return( 
        <header>
            <h1>Control de gastos</h1>
            { isValidPresupuesto ?
                <ControlPresupuesto 
                    gastos={ gastos }
                    presupuesto={ presupuesto } 
                    setGastos={ setGastos }
                    setPresupuesto={ setPresupuesto } 
                    setIsValidPresupuesto={ setIsValidPresupuesto }
                />
            : 
            <NuevoPresupuesto
                presupuesto={ presupuesto }
                setPresupuesto={ setPresupuesto } 
                setIsValidPresupuesto={ setIsValidPresupuesto }/>    
            }
        </header>
    )

}
export default Header;