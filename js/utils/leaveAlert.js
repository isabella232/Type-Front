const leaveAlert = () => {
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

export default leaveAlert
