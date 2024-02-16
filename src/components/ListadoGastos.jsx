import Gasto from "./Gasto";

const ListadoGastos = ( { gastos , setEditarGasto, eliminarGasto, filtro , gastosFiltrados }) => {

    return ( 
        <div className="listado-gastos contenedor">
            {
                filtro ? ( 
                    <>
                    <h2> { gastosFiltrados.length > 0 ? 'Lista de gastos' : 'No tiene gastos para la categoria seleccionada'} </h2>
                        { gastosFiltrados.map( gasto => ( 
                            <Gasto 
                                key={gasto.id}
                                gasto={ gasto }
                                setEditarGasto={ setEditarGasto }
                                eliminarGasto={ eliminarGasto } />
                        ))}
                    </>
                ) : ( 
                    <>
                        <h2> { gastos.length > 0 ? 'Lista de gastos' : 'No tiene gastos'} </h2>
                        { gastos.map( gasto => ( 
                            <Gasto 
                                key={gasto.id}
                                gasto={ gasto }
                                setEditarGasto={ setEditarGasto }
                                eliminarGasto={ eliminarGasto } />
                        ))}
                    </>
                )
            }
{/* 
            { filtro ? ( 
                     { gastosFiltrados.map( gasto => ( 
                        <Gasto 
                            key={gasto.id}
                            gasto={ gasto }
                            setEditarGasto={ setEditarGasto }
                            eliminarGasto={ eliminarGasto } />
                    ))}
                ) : ( 
                    { gastos.map( gasto => ( 
                        <Gasto 
                            key={gasto.id}
                            gasto={ gasto }
                            setEditarGasto={ setEditarGasto }
                            eliminarGasto={ eliminarGasto } />
                    ))}
                )
            } */}
        </div>
    )
}

export default ListadoGastos;