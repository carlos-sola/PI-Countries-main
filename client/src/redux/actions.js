import axios from 'axios';
export const  GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_BY_ID = 'GET_BY_ID'
export const SET_LOADING= 'SET_LOADING'
export const FILTER= 'FILTER'
export const FILTER_A_Z='FILTER_A_Z'
export const  FILTERED='FILTERED'


export function getAllCountries (){
    console.log("get all contries")
    return async function (dispatch){
        const json = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload: json.data 
        })
    }
};
export function getByName (name){
    console.log("getByName")
    return async function (dispatch){
        const json = await axios.get(`http://localhost:3001/countries?name=${name}`)
        return dispatch({
            type: GET_BY_NAME,
            payload: json.data
        })
    }
};
export function getById (id){
    return async function (dispatch){
        const json = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: GET_BY_ID,
            payload: json.data
        })
    }
};
export function setLoading (payload){
    return {
        type:SET_LOADING,
        payload
    }
};
export function setFilter (payload){
    return{
        type:FILTER,
        payload
    }
};
export function filtered (){
    return{
        type:FILTERED ,
    }
}
