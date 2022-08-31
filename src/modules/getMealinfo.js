import displayFoods from './displayFoods.js';
import { addLike } from './involvement.js';
import mealInfoModal from './mealInfoModal.js';

const modalDetailsContent = document.querySelector('.modal-details-content');
const recipeCloseBtn = document.getElementById('modal-close-btn');

recipeCloseBtn.addEventListener('click', () => {
  modalDetailsContent.parentElement.classList.remove('showModal');
});

// get the meal
function getMealInfo(e) {
  e.preventDefault();

  // if the like button was pressed

  if (/like-/.test(e.target.id)) {
    const id = e.target.id;
    const foodNum = id.match(/\d+$/)[0];
    addLike(foodNum);
  }
  displayFoods();

  if (e.target.classList.contains('comment-btn')) {
    const mealItem = e.target.parentElement.parentElement;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`,
    )
      .then((response) => response.json())
      .then((data) => mealInfoModal(data.meals));
  }
}

// create a modal

export default getMealInfo;