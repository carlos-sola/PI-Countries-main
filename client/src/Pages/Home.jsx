import React, { Component, useEffect} from 'react';
import fondo from '../assets/fondo-oscuro-04.jpg';
import NavBar from '../Components/NavBar';
import './Home.css';
import Cards from '../Components/Cards';
import { useDispatch, useSelector } from 'react-redux'
import{filtered, getAllActivity, getAllCountries, setLoading} from '../redux/actions'



export default function Home(){
    let dispatch = useDispatch()
    const {filter, allCountries}= useSelector(state=>state)

    useEffect(()=> {
            dispatch(getAllCountries());
            dispatch(setLoading(true));
    },[])
    useEffect(()=>{
        dispatch(filtered())
    },[filter,allCountries]);

    useEffect(()=>{
        dispatch(getAllActivity());
    },[])
    return (
        <div className='home-page'>
            <NavBar/>
            <Cards/>
        </div>
    )
}