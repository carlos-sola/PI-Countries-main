import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CreateActivities.css'


export default function CreateActivity  () {
    const [newActivity,setNewActivity] = useState({
        name:"",
        hardness:"",
        duration:"",
        season:""
    });
    function handleChange (e){
        setNewActivity({
            ...newActivity,
            [e.target.value]: e.target.value
        });
    }
    function handleSelect (e){
        setNewActivity({
            ...newActivity,
            [e.target.name]: [...newActivity[e.target.name], e.target.value]
        })
    }
 return (
    <div className='create-videogame'>
        <h4 className='encabezado'>Create Activity</h4>
        <div className="titulo-create">
            <form className='formulario'>
            <div className='input-container'>
            <label className="name-form"> Name: </label>
            <input className="input-form" type="text" name="name" value={newActivity.name} onChange={handleChange} required/>
            </div>
            <div className='input-container'>
            <label className="name-form"> Hardness: </label>
            <input className="input-form" type="number" name="hardness" value={newActivity.hardness} min={0} max={5} onChange={handleChange} required/>
            </div>

            <div className='input-container'>
            <label className="name-form">Duration: </label>
            <input className="input-form" type="number" name="duration" value={newActivity.duration} min={0} max={24} onChange={handleChange} required/>
            </div>

            <div className='input-container'>
            <label className="name-form"> Season: </label>
            <select className="input-form" type="text" name="season" value={newActivity.season} onChange={handleSelect} required>
                <option key='spring' value='Spring'>Spring</option>
                <option key='sumer' value='Summer'>Summer</option>
                <option key='autumn' value='Autumn'>Autumn</option>
                <option key='winter' value='Winter'>Winter</option>
            </select>
            <br/>
            </div>
            <div className='input-container'>
                <Link to="/home" className='linkbt'><button className='buton-atras'>Back</button></Link>
                <button type="submit" className='btn-crear'>Creat</button>
            </div>
            </form>
        </div>
        <div>

        </div>
    </div>
 )
}
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)