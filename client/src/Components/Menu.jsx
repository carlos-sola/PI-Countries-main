import React from "react";
import './Menu.css'

export default function Menu({menu}){
    return  (
    <div className={`menu-container ${menu ? "open" : ""}`}> 
            <div className='box'>
                <label>Filter : </label>
                <select className='input'>
                    <option value='byContinent'>By Continent</option>
                    <option value='byActivity'>By Activities</option>
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