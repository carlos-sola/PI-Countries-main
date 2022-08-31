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
    // function handleOnChange (e){
    //     dispatch(sortAtoZ(e.target.value))
    // }
    function handleReset(){
        dispatch (resetFilter())
    }
    const {activities}=useSelector(state=>state);
    // const seasonactivities=activities;
    // const seasonSinDuplicado = []
    //  seasonSinDuplicado = [...new Set(seasonactivities)]
    //  console.log(seasonactivities);
    //  console.log(seasonSinDuplicado)
    return  (
    <div className={`menu-container ${menu ? "open" : ""}`}> 
            <h5 className='title-f'>Filters</h5>
            <div className='filter-order'>
            <div className='box'>
                <label>Continents : </label>
                <select name='continent' className='input' onChange={handleSelect}>   
                    <option value=''>Default</option> 
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
                    <select name='activity' className='input' onChange={handleSelect}>
                        <option value=''>Default</option> 
                        {activities?.map((p)=>{
                            return <option key={p.id} value={p.name}>{p.name}</option>
                        })}
                    </select>
            </div>

            {/* <div className='box'>
                <label>Activities by season: </label>
                    <select name='activity' className='input' onSelect={handleSelect}>
                        {seasonSinDuplicado.map((p)=>{
                               return <option key={p} value={p}>{p}</option>
                        })}
                    </select>
            </div> */}
            
            <div className='box'>
            <label>Sort : </label>
            <select name='sort' className='input' onChange={handleSelect}>
                <option value="">-Select-</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='ascPopulation'>Population asc</option>
                <option value='descPopulation'>Population dec</option>
            </select>
            </div>
            
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

