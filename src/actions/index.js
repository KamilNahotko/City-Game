export const addComment = (city, street, currentTime) => ({
  type: "ADD_NEW_GUESS",
  payload: { id: 45, city: city, street: street, time: currentTime },
});
