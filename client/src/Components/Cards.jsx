import {React,useEffect, useState} from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import{getAllCountries} from '../redux/actions';
import './Cards.css'
import { Link } from 'react-router-dom'
import Paginado from './Paginado';

export default function Cards (){
    const {showCountries} = useSelector(state=>state)
    //PAGINADO//
   const [currentPage, setCurrentPage] = useState(1);
   const [countryPerPage, setCountryPerPage] = useState(10);
   const indexOfLastCountry = currentPage * countryPerPage;
   const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
   const currentCountry = showCountries.slice(indexOfFirstCountry,indexOfLastCountry);

   const paginado=(pageNumber)=>{
           setCurrentPage(pageNumber)
   }
    return (
        
        <div className='cards-wraper'>
            {currentCountry && currentCountry.map(p=>{
                return <Link className='link-btn' key={p.id} to= {`/detail/${p.id}`} >
                <Card
                name={p.name} 
                image={p.image}
                continent={p.continent}
                />  
                </Link>
            })}
            <div className='paginado-container'>
                <Paginado 
            countryPerPage={countryPerPage}
            showCountries={showCountries.length}
            paginado={paginado}
            />
            </div>
        </div>
    )
}
