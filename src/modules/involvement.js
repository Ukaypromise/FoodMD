// import displayFoods from './displayFoods.js';

import displayFoods from './displayFoods';

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
  const result = await fetch(`${url}${key}/likes`, {
    method: 'POST',
    body,
    headers,
  });
  // result();
  // console.log(result);
  displayFoods();
};

export { getLikes, addLike };