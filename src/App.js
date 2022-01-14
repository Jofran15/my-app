import React, { useState,useEffect } from "react";
import Formulario from "./components/Formulario.js";
import Cita from "./components/Cita.js";


function App() {
  //Citas en local storage
  let citasIniciales=JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales=[]
  }
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);
  //Implementacion de useEffect en actualizaciones del state
  useEffect(() => {
   if(citasIniciales){
     localStorage.setItem('citas',JSON.stringify(citas))
   } else{
     localStorage.setItem('citas',JSON.stringify([]))
   }
    
  },[citas,citasIniciales])

  //Funcion que tome las citas actuales y agregue una nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Funcion que elimina cita por su ID
  const eliminarCita=id=>{
    const nuevasCitas=citas.filter(cita=>cita.id !==id)
    guardarCitas(nuevasCitas)
    //Mensaje condicional
    
  }
  const titulo= citas.length===0?'No hay citas': 'Administra tu citas'

  return (
    <div className="container">
      <h1>Administrador de citas </h1>
      <div className="container">
        <div className="row row-cols-2">
          <div className="one-half column">
            <Formulario crearCita={crearCita}></Formulario>
          </div>
          <div className="one-half column">
            <h2>{titulo} </h2>
            {citas.map((cita) => (
              <Cita
               key={cita.id}
               cita={cita}
               eliminarCita={eliminarCita}
               >
               

               </Cita>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
