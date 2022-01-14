import React from 'react';



const Cita = ({cita,eliminarCita}) => {
    return (
        <div className='card'  >
            <p className=""card-title> Cliente:<span>{cita.nombreCliente}</span></p>
            <p className=""card-subtitle mb-2 > Tipo de servicio :<span>{cita.tipoServicio}</span></p>
            <p> Modo:<span>{cita.modo}</span></p>
           
            <button className=""
            onClick={()=>eliminarCita(cita.id)}>

                Eliminar                

            </button>

            
        </div>
    );
};


export default Cita;