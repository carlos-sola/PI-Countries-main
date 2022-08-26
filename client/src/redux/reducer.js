import {GET_ALL_COUNTRIES, GET_BY_NAME,GET_BY_ID,SET_LOADING,FILTER_A_Z} from './actions'


const initialState={
    allCountries:[],
    showCountries:[],
    countryDetail:{},
    loading:false,
    filter:{
        continent:'',
        activities:'',
    }
 //TODO: como filtrar por varios continentes a la vez
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
        // case FILTER_BY_CONTINENT:
        //     const allCountries = state.showCountries;
        //     const filterContinent= allCountries.filter((el)=>{
        //         return el.continent.find(e => e === action.payload)
        //     })
        //     return {
        //         ...state,
        //         showCountries:[...filterContinent]
        //     }
        case FILTER_A_Z :
            return{

            } 
   }
   return state
}
export default rootReducers;