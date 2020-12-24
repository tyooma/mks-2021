const initState = {}

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return state
    case 'DELETE_EVENT':
      return state
    case 'CREATE_EVENT_ERROR':
      return state
    default:
      return state
  }
}

export default eventReducer
