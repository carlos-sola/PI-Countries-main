import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filtered, resetFilter, setFilter, sortAtoZ } from "../redux/actions";
import './Menu.css'

export default function Menu({menu}){
    const dispatch= useDispatch();
    function handleSelect(e){
        dispatch(setFilter({[e.target.name]:e.target.value}));
    }
    function handleOnChange (e){
        dispatch(sortAtoZ(e.target.value))
    }
    function handleReset(){
        dispatch (resetFilter())
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
            <select className='input' onChange={handleOnChange}>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='ascPopulation'>Population asc</option>
                <option value='descPopulation'>Population dec</option>
            </select>
            </div>
            
            <div className='box'>
            <Link to='create'>
                <button className="create-activity">Create activity</button>
                </Link>
            </div>

            <div className='box'>
            <button className="Filter-reset" onClick={handleReset}>Filter reset</button>
            </div>
    </div>)

    
}

