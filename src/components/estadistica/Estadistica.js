
// const { useState, useEffect } = require("react");

// function Contenido(){
//     const [estadisticas, setEstadistica] = useState([])

//     useEffect(() => {
//         fetch("./Estadisticas.json")
//         .then(response => response.json())
//         .then (datos => {
//             setEstadistica(datos)
//         }, [])
//         .catch(error => console.error(error));
//     })
    
//     return estadisticas
// }

// export default function Estadistica(){
//     const estadisticas = Contenido();

//     return (
//         <div>
//                 {estadisticas.map(item => (
//                     <div key={item.id}>
//                         <div className='Estadisticas'>
//                             <div className='digicampistas'>
//                                 <span>
//                                     <img className="imagen1" src={queries(`./estadistica/${item.est1}`)}/>
//                                 </span>
//                                 <h3>{item.DigicampistasFormados}</h3>
//                                 <span>{item.titulo1}</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//         </div>
//     );
// }