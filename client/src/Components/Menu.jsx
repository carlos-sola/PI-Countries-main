import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtered, setFilter } from "../redux/actions";
import './Menu.css'

export default function Menu({menu}){
    const dispatch= useDispatch();
    function handleSelect(e){
        dispatch(setFilter({[e.target.name]:e.target.value}));
    }
    
    return  (
    <div className={`menu-container ${menu ? "open" : ""}`}> 
            <h5 className='title-f'>Filters</h5>
            <div className='box'>
                <label>Continents : </label>
                <select name='continent' className='input' onChange={handleSelect}>    
                    <option value='Africa'>Africa</option>
                    <option value='Antarctica'>Antarctica</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </div>
            <div className='box'>
                <label>Activities : </label>
                    <select name='activity' className='input' onSelect={handleSelect}>
                        <option value='runing'>Running</option>
                        <option value='siding'>Riding</option>
                        <option value='swimming'>Swimming</option>
                    </select>
            </div>
            <div className='box'>
            <label>Sort : </label>
            <select className='input'>
                <option value='a-z'>A-Z</option>
                <option value='z-a'>Z-A</option>
                <option value='pop-asc'>Population asc</option>
                <option value='pop-dec'>Population dec</option>
            </select>
            </div>
            <div className='box'>
            <button className="create-activity">Create activity</button>
            </div>
            <div className='box'>
            <button className="Filter-reset">Filter reset</button>
            </div>
    </div>)

    
}

