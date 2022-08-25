import {GET_ALL_COUNTRIES, GET_BY_NAME,GET_BY_ID} from './actions'


const initialState={
    allCountries:[],
    showCountries:[],
    countryDetail:{}
};

const rootReducers =(state=initialState,action)=>{
   switch(action.type){
       case GET_ALL_COUNTRIES:
           return{
               ...state,
               allCountries: action.payload,
               showCountries: action.payload
           } 
        case GET_BY_NAME:
            return{
                ...state,
                showCountries: action.payload
            }
        case GET_BY_ID:
            return{
                ...state,
                countryDetail: action.payload
            }
   }
   return state
}
export default rootReducers;