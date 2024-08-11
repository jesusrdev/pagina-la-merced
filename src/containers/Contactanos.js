import React from 'react'


// import './styles/Main.css'
import FrmContactanos from '../components/Contactanos/FrmContactanos'

function Contactanos() 
{
  return (
    <main className='contactanos'>
      <center>
        <h1>Haz tus cotizaciones sin compromiso</h1>
      </center>
      <br />
      <FrmContactanos />
    </main>
  )
}

export default Contactanos