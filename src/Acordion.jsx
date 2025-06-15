import './Acordion.css'   
import React, { useState } from 'react';

const datosAcordion = [
  {
    titulo: 'Morenada',
    contenido: 'La Morenada es una danza tradicional boliviana con raíces en la época colonial, inspirada en la presencia de africanos en las minas de Potosí. Se caracteriza por sus elaborados trajes, el sonido de las matracas que representan las cadenas de los esclavos, y los movimientos que imitan el trabajo forzado en las minas. El Día Nacional de la Morenada se celebra el 7 de septiembre, destacando su importancia cultural y patrimonial. ',
  },
  {
    titulo: 'Pujllay',
    contenido: 'El Pujllay es una danza y ritual tradicional de la cultura Yampara en Bolivia, específicamente en la región de Tarabuco, que celebra la renovación de la vida, la abundancia y la victoria sobre el colonialismo español. Se realiza durante la fiesta del Pujllay, que coincide con la época de lluvias y la cosecha, y también conmemora la batalla de Jumbate. ',
  },
  {
    titulo: 'Chovena',
    contenido: 'La chovena es una danza y un género musical originarios de la región de la Chiquitanía, en el oriente de Bolivia. Se caracteriza por ser alegre y cadenciosa, con un ritmo marcado en compás de 2/4. La chovena se baila en fiestas y celebraciones, y es considerada una danza folklórica de la zona. ',
  },
  {
    titulo: 'Carnavalito',
    contenido: 'Es una danza que posee elementos simples que van disponiéndonos a gusto de los bailarines, tal es el caso de las hileras o filas, de los puentes y las diferentes tomas y enlaces entre las parejas. Cada elemento es utilizado dentro de la danza desde la propia iniciativa del grupo danzante.',
  },
  {
    titulo: 'Potolos',
    contenido: 'La danza de los "Potolos" es una expresión cultural boliviana originaria de las regiones de Potolo (Chuquisaca) y Potobamba (Potosí). Se caracteriza por sus movimientos coquetos y el contoneo de caderas, representando el acarreo del agua y el enamoramiento del hombre hacia la mujer. ',
  },
 
];

function Acordion() {
  const [seccionesAbiertas, setSeccionesAbiertas] = useState({});

  const toggleSeccion = (index) => {
    setSeccionesAbiertas((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="acordeon-container">
      {datosAcordion.map((item, index) => (
        <div key={index} className="acordeon-seccion">
          <button className="acordeon-boton" onClick={() => toggleSeccion(index)}>
            {item.titulo} {seccionesAbiertas[index] ? '' : ''}
          </button>
          {seccionesAbiertas[index] && (
            <div className="acordeon-contenido">
              <p>{item.contenido}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Acordion;
