const modalDetailsContent = document.querySelector('.modal-details-content');
function mealInfoModal(meal) {
  meal = meal[0];
  const html = `
        <div class="modal-meal-img">
              <img src="${meal.strMealThumb}" alt="" />
            </div>
            <h2 class="modal-title">${meal.strMeal}</h2>
            <div class="item-details">
              <div>
                <p>${meal.strCategory}</p>
                <p>${meal.strArea}</p>
              </div>
              <div>
                <p>${meal.strIngredient4}</p>
                <p>${meal.strMeasure1}</p>
              </div>
            </div>
    `;
  modalDetailsContent.innerHTML = html;
  modalDetailsContent.parentElement.classList.add('showModal');
}

export default mealInfoModal;