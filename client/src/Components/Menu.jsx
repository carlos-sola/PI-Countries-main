import React from "react";
import './Menu.css'

export default function Menu({menu}){
    return  (
    <div className={`menu-container ${menu ? "open" : ""}`}>
        {/* <label>Ordenamiento</label>
        <select className="input-form" onChange={handleSort}>
            <option value="Z-A">Z-A</option>
            <option value="A-Z">A-Z</option>
            <option value="AscRating">Rating Asc</option>
            <option value="DescRating">Rating Desc</option>
        </select>
        <br/>
        <label>filtrar por Géneros</label>
        <select className="input-form" onChange={handleSelect}>
        <option key="All" value="All">All</option>
        {genders?.map(e => {
                    return <option key={e.name} value={e.name}>{e.name}</option>

                })}
        </select>
        <br/>
        <label>Filtrar por Origen</label>
        <select className="input-form" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Created">Creados</option>
            <option value="Existentes">Existentes</option>
        </select>
        <br/>
        <button className="limpiar-filtros" onClick={resteFilters}>LIMPIAR FILTROS</button>
        <br/>
        <Link to="/home/create" className="to-create"><button className="btn-create">CREAR VIDEOGAME</button></Link> */}
    </div>)

    
}