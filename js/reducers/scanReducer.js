import { TOGGLE_SCAN_HELP_INFORMATION, HIDE_SCAN_HELP_INFORMATION } from '../constants/AppConstants'
import assignToEmpty from '../utils/assign'

var initialState = window.INITIAL

function scanReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case TOGGLE_SCAN_HELP_INFORMATION:
      return assignToEmpty(state, {
        showInfo: !state.showInfo
      });
    case HIDE_SCAN_HELP_INFORMATION:
      return assignToEmpty(state, {
        showInfo: false
      });
    default:
      return state;
  }
}

export default scanReducer
