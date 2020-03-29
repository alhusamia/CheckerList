import reducer from './todos'
import { combineReducers} from "redux"

 const rootReducer=combineReducers({
     todosState:reducer
 })

 export default rootReducer