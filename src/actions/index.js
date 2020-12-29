import { v4 as uuidv4 } from "uuid";

export const addComment = (city, street, currentTime) => ({
  type: "ADD_NEW_GUESS",
  payload: { id: uuidv4(), city: city, street: street, time: currentTime },
});
