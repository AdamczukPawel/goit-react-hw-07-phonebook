function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const preloadedState = loadFromLocalStorage();

const { createSlice } = require('@reduxjs/toolkit');

const initialContactsState =
  preloadedState !== undefined ? preloadedState.contacts : [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            name: contact.name,
            number: contact.number,
            id: contact.id,
          },
        };
      },
    },
    deleteContactAction(state, action) {
      const id = action.payload;
      return state.filter(task => task.id !== id);
    },
    setContactsAction(state, action) {
      const localStorageContacts = action.payload;
      return (state = localStorageContacts);
    },
  },
});

export const { addContactAction, deleteContactAction, setContactsAction } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
