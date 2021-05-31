import { combineReducers } from 'redux'
import { profileReducer, skillReducer, contactReducer } from './postReducer'

export default combineReducers({
    profile: profileReducer,
    skill: skillReducer,
    contact: contactReducer
})