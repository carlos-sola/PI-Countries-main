import {React,useEffect, useState} from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import{getAllCountries, setLoading} from '../redux/actions';
import './Cards.css'
import { Link } from 'react-router-dom'
import Paginado from './Paginado';
import gif from '../assets/world_flags_globe_2.gif'

export default function Cards (){
    const {showCountries} = useSelector(state=>state)
    const {loading} = useSelector(state=>state)
    const dispatch= useDispatch()
    //PAGINADO//
   const [currentPage, setCurrentPage] = useState(1);
   const [countryPerPage, setCountryPerPage] = useState(10);
   const indexOfLastCountry = currentPage * countryPerPage;
   const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
   const currentCountry = showCountries.slice(indexOfFirstCountry,indexOfLastCountry);

   const paginado=(pageNumber)=>{
           setCurrentPage(pageNumber)
   }

    if(loading){
        return (
            <div className='loading'>
                <img  className='gif1' src={gif}/>
                <span className='text-loading'>Searching...</span>
            </div>
        )
    }
    if(!showCountries?.length){
        return <div className='cards-wrapper' ><h2 className="cargando1">Country not found!</h2>
        </div>
    }
   

    return (
        <div className='all'>

        <div className='cards-wraper'>
            {currentCountry && currentCountry.map(p=>{
                return <Link className='link-btn' key={p.id} to= {`/detail/${p.id}`} >
                <Card
                name={p.name} 
                image={p.image}
                continent={p.continent}
                activity={p.activities}
                />  
                </Link>
            })}
        </div>
            <div className='paginado-container'>
                <Paginado 
            countryPerPage={countryPerPage}
            showCountries={showCountries.length}
            paginado={paginado}
            currentPage={currentPage}
            />
            </div>
            </div>
    )
}
