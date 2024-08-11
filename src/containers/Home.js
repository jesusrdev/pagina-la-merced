import React from 'react'
import Header from '../components/Home/Header'
import Subscribe from '../components/Home/Subscribe'
import Ofrecemos from '../components/Home/Ofrecemos'
import QuienesSomos from '../components/Home/QuienesSomos'


// import './styles/Main.css'
// import FrmRegistrarUsuario from '../components/FrmRegistroUsuario'

function Home() 
{
  return (
    <main className='home'>
      <Header />
      <main>
        <Ofrecemos />
        <QuienesSomos />
        <Subscribe />
      </main>
      
    </main>
  )
}

export default Home