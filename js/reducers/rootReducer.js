import scanReducer from './scanReducer'
import gridsReducer from './gridsReducer'

import { combineReducers } from 'redux'
const rootReducer = combineReducers({ scanReducer, gridsReducer })

export default rootReducer
