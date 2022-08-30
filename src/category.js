const fetchFucntion = () => {
  const displayFoods = (foods) => {
    const foodItemsDiv = document.getElementById("food-items");

    foods.meals.forEach((meal) => {
      const foodDiv = document.createElement("div");
      foodDiv.className = "meal";
      const foodInfo = `      
      <img src='${meal.strMealThumb}'>
      <p>${meal.strMeal}</p>
      <p>Category: ${meal.strCategory}</p>
      <button class = "comment-btn">Comment</button>
      `;
      foodDiv.innerHTML = foodInfo;
      foodItemsDiv.appendChild(foodDiv);
    });
  };

  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
    .then((res) => res.json())
    .then((data) => displayFoods(data));
};



export default fetchFucntion;
