// import getMealInfo from "./getMealinfo.js";

const mealCount = () => {
  const count = document.querySelectorAll('.meal-item');
  console.log(count);
  return count.length;
};

export { mealCount };