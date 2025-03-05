import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { GoContainer } from "react-icons/go";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = () => {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => setMeals(res.data.meals))
        .catch((err) => {
          console.log(err);
        });
    };
    fetchMeals();
  }, []);

  // return (
  //   <div className="items-container">
  //     {meals &&
  //       meals.map((meal) => (
  //         <section className="card" key={meal.idMeal}>
  //           <img src={meal.strMealThumb} alt={meal.strMeal} />
  //           <section className="content">
  //             <p>{meal.strMeal}</p>
  //             <p>#{meal.idMeal}</p>
  //           </section>
  //         </section>
  //       ))}
  //   </div>
  // );

  const mealItems = () =>
    meals.map((meal) => {
      return (
        <section className="card" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <section className="content">
            <p>{meal.strMeal}</p>
            <p>#{meal.idMeal}</p>
          </section>
        </section>
      );
    });
  return <div className="items-container">{mealItems}</div>;
};

export default Meals;
