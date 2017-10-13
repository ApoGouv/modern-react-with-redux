/**
 * selectBook: is an ActionCreator, it needs to return an action,
 *            an object with a type property.
 * @param book
 * @returns {{}}
 */
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}