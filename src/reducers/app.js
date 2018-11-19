const defaultState = {
  contacts: [],
  editContact: {},
  editComponent: false,
  editComponentKey: ''
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_LOCAL_STORAGE':
      return { ...state, contacts: action.data ? action.data : [] }
    case 'HANDLE_EDIT_COMPONENT':
      return { ...state, editComponent: !state.editComponent }
    case 'ADD_NEW_CONTACT':
      if(parseInt(action.key) >= 0 ){
        state.contacts.splice(action.key, 1, action.data)
      }
      else {
        state.contacts.push(action.data)
      }
      return { ...state, contacts: state.contacts, editContact: {}} 
    case 'CHANGE_CONTACT_INDEX':
      state.contacts.splice(action.newKey, 0, state.contacts.splice(action.oldKey, 1)[0])
      return { ...state, contacts: state.contacts } 
    case 'GET_EDIT_COMPONENT':
    return { ...state, editComponentKey: action.contactKey, editContact: state.contacts[action.contactKey] }
    default:
      return state
  }
}
export default app
