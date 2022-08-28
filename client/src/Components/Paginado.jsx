import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Paginado.css';




export default function Paginado ({countryPerPage, showCountries,paginado,currentPage}){
    const pageNumber=[];

    for(let i=1;i<=Math.ceil(showCountries/countryPerPage);i++){
        pageNumber.push(i)
    }
useEffect (()=>{
if (currentPage > pageNumber.length) { paginado(1)} 
console.log(pageNumber.length)
},[showCountries])
//TODO : cuando entro a detail y vuelvo atras me lleve a la pagina en la q estaba
    return(
        <nav>
            <ul className='paginado'>
                {pageNumber &&
                pageNumber.map(number=>(
                    <div key={number} >
                        <button className='number' onClick={()=>paginado(number)}>{number}</button>
                    </div>
                ))}
            </ul>
        </nav>
    )
}