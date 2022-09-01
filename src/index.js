import './style.css';
import displayFoods from './modules/displayFoods.js';
import UI from './modules/getKey.js';

 const userName = document.getElementById("input-name");
 const comment = document.getElementById("comment-text");
 const submit = document.querySelector(".comment-submit");
 


displayFoods();

UI.getData();

const prevComment = async () => {
  const res = await fetch(`${url}/${id}/comments`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userName: userName.value,
      comment: comment.value,
    }),
  });
  const data = await res.json();
  return data;
};

const clearInput = () => {
  userName.value = "";
  comment.value = "";
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  prevComment();
  clearInput();
});

