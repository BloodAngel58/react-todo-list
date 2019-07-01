import { combineReducers } from 'redux'
import { formReducer } from './taskList'

export const rootReducer = combineReducers({ task: formReducer, })