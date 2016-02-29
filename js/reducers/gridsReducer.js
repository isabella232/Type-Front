import { READY_IMPORT_DIARIES,
        CANCEL_IMPORT_DIARIES,
        OPEN_LIST_SINGLE_VIEW,
        CLOSE_LIST_SINGLE_VIEW,
        CHANGE_CURRENT_GRID,
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
        currentEditGridId: null,
        changeGrid: false
      });
    case CHANGE_CURRENT_GRID:
      return assignToEmpty(state, {
        currentEditGridId: action.gridId,
        changeGrid: true
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
