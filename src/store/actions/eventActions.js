export const createEvent = (event) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('Events')
      .add({
        ...event
      })
      .then(() => {
        dispatch({ type: 'ADD_EVENT', event: event })
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_EVENT_ERROR', err })
      })
  }
}

export const deleteEvent = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('Events')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_EVENT', id: id })
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_EVENT_ERROR', err })
      })
  }
}
