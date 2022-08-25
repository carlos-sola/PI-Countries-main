import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getById } from "../redux/actions";
import './Detail.css'

export default function Detail(){
    let detail = useSelector(state=>state.countryDetail);
    const dispatch= useDispatch();
    let {id} = useParams();
    useEffect(()=>{
        dispatch(getById(id))
    },[])

    return(
    <div className='detail-wraper'>
        <div className='encabezado'>   
            <Link to='/home' className='link-btn'><button className='detail-btn'>back</button></Link>
        </div> 
        <div className='detail-container'>
            <img src={detail?.image? detail.image:'searching...'}/>
            <h4>{detail?.name? detail.name:''}</h4>
            <div className='info-detail'>
                <p className='p-info'>Continent: {detail?.continent? detail.continent.map(e=>{
                    return <span>{e} </span>
                }):''}</p>
                <p className='p-info'>Capital: {detail.capital ? detail.capital.map(e=>{
                    return <span>{e} </span>
                }):''}</p>
                <p className='p-info'>Subregion: {detail?.subregion}</p>
                <p className='p-info'>Area: {detail?.area? detail.area:''} km</p>
                <p className='p-info'>Population: {detail?.population? detail.population:''} h</p>
            </div>
            
        </div>
    </div>)
}

