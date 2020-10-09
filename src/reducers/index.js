import {combinerReducer} from 'redux'
import searchReducer from './searchReducer'


export default combineReducers({
    movies:searchReducer
})