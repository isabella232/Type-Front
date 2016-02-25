/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import scanReducer from './scanReducer'
import gridsReducer from './gridsReducer'

import { combineReducers } from 'redux'
const rootReducer = combineReducers({ scanReducer, gridsReducer })

export default rootReducer
