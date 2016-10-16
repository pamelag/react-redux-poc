import { combineReducers } from 'redux'
import { stateReducer } from './stateReducer'
//import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    stateReducer,
    //form: formReducer
})



export default rootReducer