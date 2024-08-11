import React from 'react'


// import './styles/Main.css'
import Historia from '../components/Nosotros/Historia'
import Mision from '../components/Nosotros/Mision'
import Header from '../components/Home/Header'

function Nosotros() 
{
  return (
    <main className='nosotros'>
      <Header />
      <Mision />
      <Historia />
    </main>
  )
}

export default Nosotros