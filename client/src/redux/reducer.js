import {GET_ALL_COUNTRIES, GET_BY_NAME,GET_BY_ID,SET_LOADING} from './actions'


const initialState={
    allCountries:[],
    showCountries:[],
    countryDetail:{},
    loading:false
};

const rootReducers =(state=initialState,action)=>{
   switch(action.type){
       case GET_ALL_COUNTRIES:
           return{
               ...state,
               allCountries: action.payload,
               showCountries: action.payload,
               loading:false
           } 
        case GET_BY_NAME:
            return{
                ...state,
                showCountries: action.payload,
                loading:false
            }
        case GET_BY_ID:
            return{
                ...state,
                countryDetail: action.payload,
                loading:false
            }
        case SET_LOADING:
            return{
                ...state,
                loading:true

            }
   }
   return state
}
export default rootReducers;