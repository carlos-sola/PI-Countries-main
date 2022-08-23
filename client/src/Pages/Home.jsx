import React, { Component, useEffect} from 'react';
import fondo from '../assets/fondo-oscuro-04.jpg';
import NavBar from '../Components/NavBar';
import './Home.css';
import Cards from '../Components/Cards';
import { useDispatch } from 'react-redux'
import{getAllCountries} from '../redux/actions'



export default function Home(){
    let dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllCountries())
    },[])
    return (
        <div className='home-page'>
            <NavBar/>
            <Cards/>
        </div>
    )
}