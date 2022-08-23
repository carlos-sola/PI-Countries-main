import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../redux/actions';
import './NavBar.css'


export default function NavBar(){
    const [busqueda,setBusqueda] = useState('');
    let dispatch = useDispatch();

    const handleOnChange=(e)=>{
        setBusqueda(e.target.value);
    }
    const hanldeOnSearch=()=>{
        dispatch(getByName(busqueda));
        setBusqueda('');
    }
 return (
     <div className='nav-bar'>
        <h4>Countries APP</h4>
        <div className='searchBar'>
            <input className='input-search' type='text' value={busqueda} onChange={e=>handleOnChange(e)} placeholder='Search country...' />
            <button className='search-button' onClick={()=>hanldeOnSearch()}>Search</button>
        </div>
        <button className='button-menu'>Menu</button>
     </div>
 )   
}