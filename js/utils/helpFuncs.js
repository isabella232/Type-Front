// Before Window unload alert
export function leaveAlert() {
  window.onbeforeunload = (e) => {
    let message = 'Sure you want to leave?\nAll the grid content you edited will be lost.'
    if (typeof(e) == 'undefined') {
      e = window.event
    }
    if (e) {
      e.returnValue = message
    }
    return message
  }
}

// Generate uuid
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random()*16|0
    let v = (c === "x" ? r : r&0x3|0x8)
    return v.toString(16)
  })
}
