export const createEvent = (event) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('Events')
      .add({
        ...event,
        authorFirstName: 'Katya'
      })
      .then(() => {
        dispatch({ type: 'ADD_EVENT', event: event })
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_EVENT_ERROR', err })
      })
  }
}
