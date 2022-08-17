import React from 'react'
import fondo from '../assets/fondo-oscuro-04.jpg'

export default function LandingPage (){
    return <div>
        <div className='fondo-landing'>
            <img className='fondo' src={fondo} alt=''/>
            {/* <h1 className='bienvenido'>¡Bienvenido!</h1> */}
            <Link to="/home"><button className='boton-landing'> <h2>Inicio</h2></button></Link>
            </div>
    </div>
}