import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getById, setLoading } from "../redux/actions";
import './Detail.css'
import gif from '../assets/world_flags_globe_2.gif';

export default function Detail(){
    let detail = useSelector(state=>state.countryDetail);
    const {loading}=useSelector(state=>state)
    const dispatch= useDispatch();
    let {id} = useParams();
    useEffect(()=>{
        dispatch(getById(id));
        dispatch(setLoading(true))
    },[]);
    if (loading){
        return  (
        <div className='detail-wraper'>
            <div className='encabezado'>   
            <Link to='/home' className='link-btn'><button className='detail-btn'>back</button></Link>
        </div> 
            <div className='loading'>
                 <img  className='gif1' src={gif}/>
                 <span className='text-loading'>Searching...</span>
             </div>
        </div>    
         )
     }

    return(
        
    <div className='detail-wraper'>
        <div className='encabezado1'>   
            <Link to='/home' className='link-btn'><button className='detail-btn'>back</button></Link>
        </div> 
        <div className='detail-container'>
            <img src={detail?.image? detail.image:'searching...'}/>
            <h4>{detail?.name? detail.name:''}</h4>
            <div className='info-detail'>
                <p className='p-info'>Continent: {detail?.continent? detail.continent.map((e,g)=>{
                    return <span key={g}>{e} </span>
                }):''}</p>
                <p className='p-info'>Capital: {detail.capital ? detail.capital.map((e,g)=>{
                    return <span key={g}>{e} </span>
                }):''}</p>
                <p className='p-info'>Subregion: {detail?.subregion}</p>
                <p className='p-info'>Area: {detail?.area? detail.area:''} km</p>
                <p className='p-info'>Population: {detail?.population? detail.population:''} h</p>
            </div>
            
        </div>
    </div>)
}

