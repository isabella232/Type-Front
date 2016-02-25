/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 *
 * To add a new reducer, add a file like this to the reducers folder, and
 * add it in the rootReducer.js.
 */

import { UPDATE_GRID_CONTENT } from '../constants/AppConstants'
import assignToEmpty from '../utils/assign'

var initialState = window.INITIAL

function gridReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case UPDATE_GRID_CONTENT:
      return assignToEmpty(state, {
        content: action.content
      });
    default:
      return state;
  }
}

export default gridReducer