import fetch from 'isomorphic-fetch'

/*
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 * 3) (optional) Add an async function like this:
 *    export function asyncYourAction(var) {
 *        return (dispatch) => {
 *             // Do async stuff here
 *             return dispatch(yourAction(var));
 *        };
 *    }
 *
 *    If you add an async function, remove the export from the function
 *    created in the second step
 */

// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import {
  GENERATE_SCAN_QRCODE,
  DATA_INIT,
  TOGGLE_SCAN_HELP_INFORMATION,
  HIDE_SCAN_HELP_INFORMATION,
  READY_IMPORT_DIARIES,
  CANCEL_IMPORT_DIARIES,
  OPEN_LIST_SINGLE_VIEW,
  CLOSE_LIST_SINGLE_VIEW,
  CHANGE_CURRENT_GRID,
  UPDATE_GRID_CONTENT,
  UPDATE_SERVER_DATA,
  GENERATE_IMPORT_SCAN_QRCODE
} from '../constants/AppConstants'

// ScanPage
export function generateScanQRCode(qrcodeText) {
  return { type: GENERATE_SCAN_QRCODE, qrcodeText }
}

export function dataInit(gridsSet, history) {
  return { type: DATA_INIT, gridsSet, history }
}

export function asyncDataInit(diaryURL, history) {
  return (dispatch) => {
    return fetch(diaryURL)
      .then(response => response.json())
      .then(json => dispatch(dataInit(json, history)))
  }
}

export function toggleScanHelpInformation() {
  return { type: TOGGLE_SCAN_HELP_INFORMATION }
}

export function hideScanHelpInformation() {
  return { type: HIDE_SCAN_HELP_INFORMATION }
}

// GridsPage
export function readyImportDiaries() {
  return { type: READY_IMPORT_DIARIES }
}

export function cancelImportDiaries() {
  return { type: CANCEL_IMPORT_DIARIES }
}

export function openListSingleView(gridId) {
  return { type: OPEN_LIST_SINGLE_VIEW, gridId }
}

export function closeListSingleView() {
  return { type: CLOSE_LIST_SINGLE_VIEW }
}

export function changeCurrentGrid(gridId) {
  return { type: CHANGE_CURRENT_GRID, gridId }
}

export function updateGridContent(content, gridId) {
  return { type: UPDATE_GRID_CONTENT, content, gridId }
}

export function asyncUpdateGridContent(content, gridId) {
  return (dispatch) => {
    return dispatch(updateGridContent(content, gridId))
  }
}

export function updateServerData(diaryURL, gridsData) {
  return (dispatch) => {
    return fetch(diaryURL, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gridsData)
    })
    .then(response => response.json())
    .then(diary => dispatch(generateImportScanCode(diary)))
    .then(() => dispatch(readyImportDiaries()))
  }
}

export function generateImportScanCode(importDiaryData) {
  let importQRcodeText = `GridDiary:Import:${importDiaryData.date}:${window.location.origin}/diaries/${importDiaryData.id}`
  return { type: GENERATE_IMPORT_SCAN_QRCODE, importQRcodeText }
}
