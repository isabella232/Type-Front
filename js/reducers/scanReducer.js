import { TOGGLE_SCAN_HELP_INFORMATION,
          HIDE_SCAN_HELP_INFORMATION,
          GENERATE_SCAN_QRCODE,
          DATA_INIT } from '../constants/AppConstants'
import assignToEmpty from '../utils/assign'

var initialState = window.INITIAL

function scanReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case GENERATE_SCAN_QRCODE:
      return assignToEmpty(state, {
        qrcodeText: action.qrcodeText
      })
    case TOGGLE_SCAN_HELP_INFORMATION:
      return assignToEmpty(state, {
        showInfo: !state.showInfo
      });
    case HIDE_SCAN_HELP_INFORMATION:
      return assignToEmpty(state, {
        showInfo: false
      });
    case DATA_INIT:
      return assignToEmpty(state, {
        gridsSet: action.gridsSet
      })
    default:
      return state;
  }
}

export default scanReducer
