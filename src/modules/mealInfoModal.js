const modalDetailsContent = document.querySelector('.modal-details-content');
function mealInfoModal(meal) {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strIngredient4,
    strMeasure1,
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
            <div class="comment">
              <h3 class="modal-title">Comments</h3>
              <p class="modal-title">3/4/2022 Promise: I love this</p>
            </div>
            <div class="add-comment">
              <h3>Add a comment</h3>
              <input type="text" class="input-name">
              <textarea name="comment" id="comment-text" cols="30" rows="2"></textarea>
              <button class = 'comment-submit'>Comment</button>
            </div>
    `;
  modalDetailsContent.innerHTML = html;
  modalDetailsContent.parentElement.classList.add('showModal');
}
export default mealInfoModal;