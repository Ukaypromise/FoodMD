import displayFoods from "./displayFoods";

let url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'
let key = '4ZfW9Nw9KyQJZ8SztYPH';

const getLikes = async () => {
  const result = await fetch(`${url}${key}/likes`);
  const data = await result.json();
  console.log(data);
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
  console.log(result);
  // location.reload()
  displayFoods();
};


export { getLikes, addLike };