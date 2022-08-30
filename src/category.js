const getMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?a=indian',
  );
  const result = await response.json();
  console.log(result)
  return result.meals;
  
};

export default getMeals;