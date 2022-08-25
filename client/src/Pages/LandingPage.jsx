import React from 'react'
import fondo from '../assets/fondo-oscuro-04.jpg'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import gif from '../assets/world_flags_globe_2.gif'

export default function LandingPage (){
    return <div className='landing-page'>
        <div className='fondo-landing'>
            {/* <img className='fondo' src={fondo} alt=''/> */}
            {/* <h1 className='bienvenido'>¡Bienvenido!</h1> */}
            <img  className='gif' src={gif}/>
            <Link to="/home"><button className='boton-landing'>Countries App</button></Link>
            </div>
           
    </div>
}