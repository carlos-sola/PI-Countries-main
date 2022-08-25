import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import { getByName, setLoading } from '../redux/actions';
import Menu from './Menu';
import './NavBar.css'


export default function NavBar(){
    const [busqueda,setBusqueda] = useState('');
    const [menu,setMenu] = useState(false)
    let dispatch = useDispatch();

    const handleOnChange=(e)=>{
        setBusqueda(e.target.value);
    }
    const hanldeOnSearch=()=>{
        dispatch(getByName(busqueda));
        dispatch(setLoading(true))
        setBusqueda('');
    }
    const handleOnClick=()=>{
       setMenu(!menu)
    }

 return (
     <div className='nav-bar'>
        <h4 className='country-app'>Countries APP</h4>
        <div className='searchBar'>
            <input className='input-search' type='text' value={busqueda} onChange={e=>handleOnChange(e)} placeholder='Search country...' />
            <button className='search-button' onClick={()=>hanldeOnSearch()}>Search</button>
        </div>
        {/* <button className='button-menu'>Menu</button> */}
        <div id='navMenu' className={menu? 'active' : ''} onClick={()=>handleOnClick()}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <Menu
        menu={menu}
        />
     </div>
 )   
}