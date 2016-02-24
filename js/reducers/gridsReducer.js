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

import { READY_IMPORT_DIARIES, CANCEL_IMPORT_DIARIES } from '../constants/AppConstants';
import assignToEmpty from '../utils/assign';

const initialState = {
  showPopup: false,
  grids: [
    {
      id: 1,
      title: '今日纪录',
      content: '上午请假陪 cc 去医院检查，最近她头晕的厉害。\n\n下午依旧去上班，打了新年来的第一次羽毛球。',
      withImage: true
    },
    {
      id: 2,
      title: '今天我让这个世界更美好了一些吗？',
      content: '情人节，没有让世界更美好；但是让自己的生活更加美好了些。',
      withImage: true
    },
    {
      id: 3,
      title: '今天给我留下的印象最为深刻让我最为感动让我最为心碎的一件事',
      content: '',
      withImage: false
    }
  ]
};

function gridsReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case READY_IMPORT_DIARIES:
      return assignToEmpty(state, {
        showPopup: true
        //showInfo: !state.showInfo
      });
    case CANCEL_IMPORT_DIARIES:
      return assignToEmpty(state, {
        //showInfo: false
        showPopup: false
      });
    default:
      return state;
  }
}

export default gridsReducer;
