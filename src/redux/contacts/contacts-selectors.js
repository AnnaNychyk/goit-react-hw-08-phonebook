export const getContacts = store => store.contacts.items;
export const getFilter = store => store.contacts.filter;
export const getLoading = store => store.contacts.loading;

export const getFilteredContacts = (contacts, filter) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return result;
};
