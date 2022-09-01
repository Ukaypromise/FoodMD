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
// ***********************************************************************

// Comment section

// get the comments
const getComments = async (id) => {
  const result = await fetch(`${url}${KeyComment}/comments?item_id=${id}`);
  const dataResult = await result.json();
  dataResult.forEach((data) => {
    renderComments(data);
    console.log(data);
  })
}

// render the comments on the page

function renderComments(data) {
  const content = document.querySelector(".show-comments");
  content.innerHTML += `<p class="comm">${data.creation_date} - ${data.username} - ${data.comment}</p>`;
}




export { getLikes, addLike, getComments };

