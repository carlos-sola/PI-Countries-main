import {React} from 'react';
import './Card.css'

export default function Card ({id,name,image,continent,capital,subregion,area,population}){
    return (
        <div className='container'>
            <img className='img-card' src={image}/>
            <h4>{name}</h4>
            <div className='card-detail'>
              <p>Continent: {continent?.map(p=>{
                  return <span key={p}>{p}</span>
              })}</p>
              <p>Capital: {capital?.map(p=>{
                  return <span key={p}>{p}</span> 
              })}</p>
              <p>Sub-Region: {subregion}</p>
              <p>area: {area}</p>
              <p>population: {population}</p> 
              <p>{id}</p>   
            </div>  
        </div>
    )
}

// "id"
// "name"
// "image"
// "continent"
// "capital"
// "subRegion"
// "area"
// "population"