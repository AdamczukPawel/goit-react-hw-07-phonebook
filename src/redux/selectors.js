export const selectContacts = state => {
  if (state === undefined) {
    return;
  }
  return state.contacts.items;
};

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => {
  return state.contacts.error;
};

export const selectFilter = state => {
  if (state === undefined) {
    return;
  }
  return state.filter;
};

export const selectFilteredContacts = state => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
};
