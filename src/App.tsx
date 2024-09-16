import "./styles.css";

export default function App() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
  let mealName;
  let foodInfo = [];
  console.log(foodInfo);
  const displayFoods = (foods) => {
    foods.meals.forEach((meal) => {
      mealName = meal.strMeal;
    });
  };
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoods(data));

  return (
    <div className="App">
      <h1>{mealName}</h1>
    </div>
  );
}
