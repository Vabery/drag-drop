export function handleEditComponent() {
  return{ type: 'HANDLE_EDIT_COMPONENT' }
}

export function addNewContact(data, key) {
  return{ data, key, type: 'ADD_NEW_CONTACT' }
}

export function getLocalStorage() {
  const data = JSON.parse(localStorage.getItem('contacts'))
  return{ data, type: 'GET_LOCAL_STORAGE'}
}

export function getEditContact(contactKey) {
  return { contactKey, type: 'GET_EDIT_COMPONENT' }
}

export function changeContactIndex(newKey, oldKey) {
  return { newKey, oldKey, type: 'CHANGE_CONTACT_INDEX' }
}