import {GET_ALL_COUNTRIES, GET_BY_NAME,GET_BY_ID,SET_LOADING,FILTER,FILTERED, filtered} from './actions'


const initialState={
    allCountries:[],
    showCountries:[],
    countryDetail:{},
    loading:false,
    filter:{
        continent:'',
        activity:'',
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
        case FILTER:
            return {
                ...state,
                filter :{
                        ...state.filter,
                        ...action.payload
                        /*...action.payload = ...{continent: value}  = continent: value*/
                }
            }
        case FILTERED:
            const all = state.allCountries;
            const filteredByContinent= state.filter.continent === "" ? all : all.filter(e=>{
                return e.continent.map(g=>g).includes(state.filter.continent) 
            });
            const filteredByActivity= state.filter.activity === "" ? filteredByContinent : filteredByContinent.filter(e=>{
                return e.activity.map(g=>g).includes(state.filter.activity) 
            })

            return {
                ...state,
                showCountries:[...filteredByActivity]
            }
   }
   return state
}
export default rootReducers;

