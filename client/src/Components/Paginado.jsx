import React from 'react';
import './Paginado.css'



export default function Paginado ({countryPerPage, showCountries,paginado}){
    const pageNumber=[]

    for(let i=1;i<=Math.ceil(showCountries/countryPerPage);i++){
        pageNumber.push(i)
    }
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