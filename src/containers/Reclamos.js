import React from 'react'


// import './styles/Main.css'
import FrmReclamos from '../components/Reclamos/FrmReclamos'

function Reclamos() 
{
  return (
    <main className='reclamos'>
      <center>
      <h1>Registre su reclamo. Le ayudaremos, <br></br>
        y usted nos ayudará a mejorar.</h1>
      </center>
      <br></br>
      <FrmReclamos/>
    </main>
  )
}

export default Reclamos