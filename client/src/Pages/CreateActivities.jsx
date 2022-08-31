import React, { useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { createActivity, getAllCountries, } from "../redux/actions";
import './CreateActivities.css';
import { useDispatch, useSelector } from 'react-redux';


export default function CreateActivity  () {
    function validate(newAct) {
        let errors = {}
        if (!newAct.name) {
            errors.name = "Complete name of activity"
        } else if (!newAct.hardness) {
            errors.hardness = "Complete hardness"
        } else if (!newAct.duration) {
            errors.duration = "Complete duration"
        } else if (!newAct.season.length) {
            errors.season = "Complete season"
        } else if (!newAct.country.length) {
            errors.country = "Add a country"
        }
        return errors
    }
    const history = useHistory()
    const dispatch = useDispatch()
    const[errors,setErrors] = useState({})
    const [newActivity,setNewActivity] = useState({
        name:"",
        hardness:"",
        duration:"",
        season:[],
        country:[]
    });
    
    function handleChange (e){
        setNewActivity({
            ...newActivity,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...newActivity,
            [e.target.name]: e.target.value
        }
        ))
    };
    function handleSelect (e){
        e.preventDefault();
        if(!newActivity[e.target.name].includes(e.target.value)){
            setNewActivity({
                ...newActivity,
                [e.target.name]: [...newActivity[e.target.name], e.target.value]
            })
        };
        setErrors(validate({
            ...newActivity,
            [e.target.name]: e.target.value
        }
        ))
    };
    function handleDelete (e,el){
        e.preventDefault();
        setNewActivity({
            ...newActivity,
            [e.target.name]: newActivity[e.target.name].filter((p)=>{
                return p !=el
            })
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        if(newActivity.name !== ""){
        dispatch(createActivity(newActivity));
        setNewActivity({
            name:"",
            hardness:"",
            duration:"",
            season:[] ,
            country:[]
        });
        alert('successfully created');
        history.push('/home')
        // history.push('/home')
    }else{
        alert ('At least the name is required! The activity is not created')
    };
};

useEffect(()=>{
    dispatch(getAllCountries());
},[]);
const {showCountries} = useSelector(state=>state);
showCountries?.sort((a,b)=>{
    let A = a.name.toLowerCase();
    let B = b.name.toLowerCase();
if(A == B) {
    return 0; 
  }
if(A < B) {
    return -1;
  }
  if(A > B) {
    return 1;
  }
})

 return (
    <div className='create-videogame'>
        <h4 className='encabezado'>Create Activity</h4>
        <div className="titulo-create">
            <form className='formulario' onSubmit={(e)=>handleSubmit(e)}>
                <div className='input-container1'>
                    <label className="name-form"> Name: </label>
                    <input className="input-form" type="text" name="name" value={newActivity.name} onChange={handleChange} />
                </div> 
                <div className='input-container1'>{errors?.name && <p className='texterr'>* {errors.name}</p>}</div>
                
            <div className='input-container'>
            <label className="name-form"> Hardness: </label>
            <input className="input-form" type="number" name="hardness" value={newActivity.hardness} min={0} max={5} onChange={handleChange} />
            </div>

            <div className='input-container'>
            <label className="name-form">Duration : </label>
            <input className="input-form" type="number" name="duration" value={newActivity.duration} min={0} max={48} onChange={handleChange} />
            <p className='hrs'>(hours)</p>
            </div>

            <div className='input-container'>
            <label className="name-form"> Season: </label>
            <select className="input-form"  name="season"  onChange={(e)=>handleSelect(e)} >
                <option key='spring' value='spring'>spring</option>
                <option key='sumer' value='summer'>summer</option>
                <option key='autumn' value='autumn'>autumn</option>
                <option key='winter' value='winter'>winter</option>
            </select>
            </div>
            <div className="container-platform-label">
            { newActivity.season.map((el)=>{
                return <div className="platform-Label"> 
                    <p>{el}</p>
                    <button name='season' className="delete-buton-label" onClick={(e)=>handleDelete(e,el)}>x</button>
                </div>
            })}
            </div>
            
            <div className='input-container'>
            <label className="name-form"> Country: </label>
            <select className="input-country"  name="country"  onChange={(e)=>handleSelect(e)} >
                {showCountries?.map((d)=>{
                    return <option key={d.name} value={d.name}>{d.name}</option>
                })
            }
            </select>
            </div>
            <div className="container-platform-label">
            { newActivity.country.map((el)=>{
                return <div className="platform-Label"> 
                    <p>{el}</p>
                    <button name='country' className="delete-buton-label" onClick={(e)=>handleDelete(e,el)}>x</button>
                </div>
            })}
            </div>

         

            <div className='input-container'>
                <Link to="/home" className='linkbt'><button className='buton-atras'>Back</button></Link>
                <button type="submit" className='btn-crear' disabled={Object.keys(errors).length > 0}>Create</button>
            </div>
            </form>
        </div>
        <div>

        </div>
    </div>
 )
}
