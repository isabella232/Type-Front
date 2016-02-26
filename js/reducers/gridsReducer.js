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

import { READY_IMPORT_DIARIES,
        CANCEL_IMPORT_DIARIES,
        OPEN_LIST_SINGLE_VIEW,
        CLOSE_LIST_SINGLE_VIEW,
        UPDATE_GRID_CONTENT} from '../constants/AppConstants'
import assignToEmpty from '../utils/assign'

var initialState = window.INITIAL

function gridsReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case READY_IMPORT_DIARIES:
      return assignToEmpty(state, {
        showPopup: true
      });
    case CANCEL_IMPORT_DIARIES:
      return assignToEmpty(state, {
        showPopup: false
      });
    case OPEN_LIST_SINGLE_VIEW:
      return assignToEmpty(state, {
        showEdit: true,
        currentEditGridId: action.gridId
      });
    case CLOSE_LIST_SINGLE_VIEW:
      return assignToEmpty(state, {
        showEdit: false,
        currentEditGridId: null
      });
    case UPDATE_GRID_CONTENT:
      let newGrids = state.grids.map((grid) => {
        if (grid.id == action.gridId) {
          grid = assignToEmpty(grid, {
            content: action.content
          })
        }
        return grid
      })

      return assignToEmpty(state, {
        grids: newGrids
      })
    default:
      return state;
  }
}

export default gridsReducer
