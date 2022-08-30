import './style.css';
import image from './foodCode.png';
import getMeals from './category';


// const myMeal = () => {
//   method: 'GET',

// fetch('https://themealdb.p.rapidapi.com/filter.php?i=chicken_breast', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
//   console.log(result.meal)
// }

// myMeal();

// fetch('www.themealdb.com/api/json/v1/1/filter.php?c=beef', {
//   method: 'get',
//   body: JSON.stringify({
//     meals: '',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const fetchFucntion = ()=>{

  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
  .then(res=>res.json())
  .then(data=> displayFoods(data))
  
  const displayFoods = foods =>{
  const foodItemsDiv = document.getElementById('food-items');
  
  foods.meals.forEach(meal=>{
  
      const foodDiv = document.createElement('div');
  
      foodDiv.className = 'meal';
      const foodInfo = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}">
      <p>${meal.strCategory} </p>

      `;
      foodDiv.innerHTML = foodInfo;
      foodItemsDiv.appendChild(foodDiv);
  });
  }
  
  }

  fetchFucntion();