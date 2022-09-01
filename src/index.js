import './style.css';
import displayFoods from './modules/displayFoods.js';
import { getComments } from './modules/involvement.js';

const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const KeyComment = "CpkFU0gWCBmni5z8HJTQ";

 const userName = document.getElementById("input-name");
 const comment = document.getElementById("comment-text");
 const submit = document.querySelector(".comment-submit");
 

displayFoods();
getComments()

// post the comments
const postComment = async (id, name, comment) => {
  const body = JSON.stringify({
    item_id: id,
    username: name,
    comment: comment,
  });
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };
  const result = await fetch(`${url}${KeyComment}/comments`, {
    method: "POST",
    body,
    headers,
  });
  result();
}

const clearInput = () => {
  userName.value = "";
  comment.value = "";
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  postComment();
  clearInput();
  console.log("heloooo");
});

