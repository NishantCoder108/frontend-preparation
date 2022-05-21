import {combineReducers} from 'redux'
import couterReducer from './counter'
import loggedReducer from './isLogged'

const allReducers = combineReducers({
    counter :couterReducer,
    isLogged : loggedReducer
})

export default allReducers