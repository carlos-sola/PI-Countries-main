import React from 'react'
import fondo from '../assets/fondo-oscuro-04.jpg'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage (){
    return <div className='landing-page'>
        <div className='fondo-landing'>
            {/* <img className='fondo' src={fondo} alt=''/> */}
            {/* <h1 className='bienvenido'>¡Bienvenido!</h1> */}
            <Link to="/home"><button className='boton-landing'>Countries</button></Link>
            </div>
           
    </div>
}