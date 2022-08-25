import {React} from 'react';
import './Card.css'

export default function Card ({id,name,image,continent,capital,subregion,area,population}){
    return (
        <div className='container'>
            <img className='img-card' src={image}/>
            <h4 className='name-country'>{name}</h4>
            <div className='card-detail'>
              <p className='p-info'>{continent?.map(p=>{
                  return <span key={p}>{p}</span>
              })}</p>
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