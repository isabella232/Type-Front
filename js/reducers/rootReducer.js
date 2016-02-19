/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import homeReducer from './homeReducer';
import scanReducer from './scanReducer';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({ homeReducer, scanReducer });

export default rootReducer;
