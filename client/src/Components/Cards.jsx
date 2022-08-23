import {React,useEffect} from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import{getAllCountries} from '../redux/actions';
import './Cards.css'

export default function Cards (){
    const {showCountries} = useSelector(state=>state)
    console.log(showCountries)
    return (
        <div className='cards-wraper'>
            {showCountries && showCountries.map(p=>{
                return <Card
                name={p.name} 
                image={p.image}
                continent={p.continent}
                capital={p.capital}
                subregion={p.subregion}
                area={p.area}
                population={p.population}
                />  
            })}
        </div>
    )
}
