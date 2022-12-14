/* eslint-disable */
import displayFoods from "./displayFoods.js";
/* eslint-enable */

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const key = '4ZfW9Nw9KyQJZ8SztYPH';

const getLikes = async () => {
  const result = await fetch(`${url}${key}/likes`);
  const data = await result.json();
  return data;
};

const addLike = async (id) => {
  const body = JSON.stringify({ item_id: id });
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };
  /* eslint-disable */
  const result = await fetch(`${url}${key}/likes`, {
    /* eslint-enable */
    method: 'POST',
    body,
    headers,
  });
  displayFoods();
};

export { getLikes, addLike };
