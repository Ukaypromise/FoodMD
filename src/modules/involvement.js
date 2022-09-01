// import displayFoods from './displayFoods.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const key = '4ZfW9Nw9KyQJZ8SztYPH';
const KeyComment = "CpkFU0gWCBmni5z8HJTQ";

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
  result();
};

function getComments() {
  fetch(`${url}/${KeyComment}/comments`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function postComments(id, name, comment) {
  fetch(`${url}/${KeyComment}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: comment,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

export { getLikes, addLike, getComments, postComments };