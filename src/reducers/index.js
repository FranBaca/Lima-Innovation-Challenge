import { detail, comments,tag} from "../actions/index";
const initialState = {
   detail,
   comments,
   tag:""
}

function rootReducer(state=initialState, action){
    switch(action.type){
         case detail:
        return{
            ...state,
            detail: action.payload
        }
        case comments:
        return {    
            ...state,
            comments: action.payload
        }

        case tag:
            return{
               ...state,
            tag:action.payload  
            }
           
        
        default: return state
    }
   
}

export default rootReducer;