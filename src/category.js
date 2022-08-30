const fetchFucntion = () => {
  const displayFoods = (foods) => {
    const foodItemsDiv = document.getElementById('food-items');

    foods.meals.forEach((meal) => {
      const foodDiv = document.createElement('div');

      foodDiv.className = 'meal';
      const foodInfo = `
      <h3>${meal.strMeal}</h3>
      <img src='${meal.strMealThumb}'>
      <p>${meal.strCategory} </p>

      `;
      foodDiv.innerHTML = foodInfo;
      foodItemsDiv.appendChild(foodDiv);
    });
  };

  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
    .then((res) => res.json())
    .then((data) => displayFoods(data));
};

// const getMeals = async () => {
//   const response = await fetch(
//     'https://www.themealdb.com/api/json/v1/1/filter.php?a=indian',
//   );
//   const result = await response.json();
//   console.log(result)
//   return result.meals;
// };

export default fetchFucntion;