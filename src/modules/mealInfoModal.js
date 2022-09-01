const modalDetailsContent = document.querySelector(".modal-details-content");
const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const key = "4ZfW9Nw9KyQJZ8SztYPH";

function mealInfoModal(meal) {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strIngredient4,
    strMeasure1,
    idMeal,
  } = meal[0];
  // meal = meal[0];
  const html = `
        <div class="modal-meal-img">
              <img src="${strMealThumb}" alt="" />
            </div>
            <h2 class="modal-title">${strMeal}</h2>
            <div class="item-details">
              <div>
                <p>${strCategory}</p>
                <p>${strArea}</p>
              </div>
              <div>
                <p>${strIngredient4}</p>
                <p>${strMeasure1}</p>
              </div>
            </div>
            <h2 id="commentTitle">Comments</h2>
            <div id="commentsDisplay"></div>
            <h2 id="plusComment">Add a comment ${idMeal}</h2>
            <div id="form">
            <input type="text" id="username" placeholder="Your name" />
            <input type="text" id="comment" placeholder="Add Your comment" />
            <button type="submit" id="submitBtn">Submit</button>
            </div>
    `;
  modalDetailsContent.innerHTML = html;
  modalDetailsContent.parentElement.classList.add("showModal");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", () => {
    console.log("click");
    const item_id = idMeal;
    let usernameInput = document.getElementById("username");
    let commentInput = document.getElementById("comment");
    const username = usernameInput.value;
    const comment = commentInput.value;
    const dataToSend = JSON.stringify({ item_id, username, comment });
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: data,
      });

      return response;
    }

    postData(`${url}${key}/comments`, dataToSend)
      .then((json) => {
        console.log(json); // Handle success
      })
      .catch((err) => {
        console.log(err); // Handle errors
      });
    usernameInput.value = "";
    commentInput.value = "";
  });

  async function getData(url = "") {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    return response;
  }

  const commentsDisplay = document.getElementById('commentsDisplay');

  const myComments = () => {
    getData(`${url}${key}/comments?item_id=${idMeal}`).then(async (res) => {
      const array = await res.json();
      return array;
    })
    .then((array) => {
      const gege = array
      .map(
        (items) => `
    <div class="left">
<p class="eachScore">${items.creation_date} 
<span>${items.username}:
</span> 
</p>
<span>
<p class="numberSc">${items.comment}</p>
</span>
</div>`
      )
      .join(" ");
    commentsDisplay.innerHTML = gege;
    })
  };
  myComments();
}

export default mealInfoModal;
