import {GET_ALL_COUNTRIES, GET_BY_NAME,GET_BY_ID,SET_LOADING,FILTER,FILTERED,RESET_FILTER,SORT_A_Z,GET_ALL_ACTIVITIES} from './actions'


const initialState={
    allCountries:[],
    showCountries:[],
    countryDetail:{},
    loading:false,
    filter:{
        continent:'',
        activity:'',
    },
    activities:[]
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
                return e.continent.includes(state.filter.continent) 
            });
            const filteredByActivity= state.filter.activity === "" ? filteredByContinent : filteredByContinent.filter(e=>{
                return e.activities.map(g=>g.name).includes(state.filter.activity) 
            })

            return {
                ...state,
                showCountries:[...filteredByActivity]
            }
        case RESET_FILTER:
            return{
                ...state,
                filter:{
                    continent:'',
                    activity:'',
                }
                
            }
        
        case SORT_A_Z:
                const allSort = state.showCountries
                const sortAz =  action.payload==="" ? allSort  : action.payload==='Z-A' ? allSort.sort((a,b)=>{
                    let A = a.name.toLowerCase();
                    let B = b.name.toLowerCase();
                    if(A == B) {
                        return 0; 
                      }
                    if(A > B) {
                        return -1;
                      }
                      if(A < B) {
                        return 1;
                      }
                      }) : action.payload==='A-Z' ? allSort.sort((a,b)=>{
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
                }) : action.payload==='ascPopulation' ?  allSort.sort((a,b)=>{
                    let A = a.population
                    let B = b.population
                if(A == B) {
                    return 0; 
                  }
                if(A < B) {
                    return -1;
                  }
                  if(A > B) {
                    return 1;
                  }
            }) : action.payload==='descPopulation' &&  allSort.sort((a,b)=>{
                let A = a.population
                let B = b.population
            if(A == B) {
                return 0; 
              }
            if(A > B) {
                return -1;
              }
              if(A < B) {
                return 1;
              }
        })
                return {
                    ...state,
                    showCountries: [...sortAz]
                } 
        case GET_ALL_ACTIVITIES :
            return{
                ...state,
                activities: action.payload
            }
   }
   return state
}
export default rootReducers;

