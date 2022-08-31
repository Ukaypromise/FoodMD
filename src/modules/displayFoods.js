import getMealInfo from './getMealinfo.js';
import { getLikes } from './involvement.js';

const foodItemsDiv = document.getElementById('food-items');
// const usrlikes = document.getElementById('likes');

// event listeners
foodItemsDiv.addEventListener('click', getMealInfo);

const displayFoods = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
    .then((res) => res.json())
    .then((data) => {
      getLikes().then((datalikes) => {
        let html = '';
        data.meals.forEach((meal) => {
          const arrLikes = datalikes.filter(
            (item) => item.item_id === meal.idMeal,
          );

          // ckeck if the objct is empty
          let pickLikes = '';
          if (arrLikes.length !== 0) {
            pickLikes = arrLikes[0].likes;
          }

          html += `
      <div class='meal-item' data-id = '${meal.idMeal}'> 
        <div class = 'meal-img'>     
          <img src='${meal.strMealThumb}'>
        </div>
        <div class = 'involvement'> 
        <p>Show me how much you....<p>
        <a>${pickLikes}  <i class='fa-regular fa-heart' id='like-${meal.idMeal}'>  Like</i></a>
        </div>
        <div class = 'meal-name'>
          <p>${meal.strMeal}</p>
          <p>Category: ${meal.strCategory}</p>
          <button class = 'comment-btn'>Comment</button>
        </div>
      </div>
      `;
        });
        foodItemsDiv.innerHTML = html;
      });
    });
};

export default displayFoods;
