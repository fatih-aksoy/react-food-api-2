import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const Details = () => {
  // ! buraya tasidigimiz state e food adi verelim
  const { state: food } = useLocation();
  // console.log(food);
  return (
    <div className="min-h-screen bg-blue-100">
      <Navbar />
      <p className="text-3xl text-center mt-5 font-semibold">{food.label}</p>
      <div className="flex justify-evenly items-center h-[30rem] flex-wrap">
        <ul>
          <p className="text-xl font-semibold text-red-700">Nutrients</p>
          <li>Calcium: {food.digest[5].total.toFixed()} mg</li>
          <li>Carbs: {food.digest[1].total.toFixed()} g</li>
          <li>Cholesterol: {food.digest[3].total.toFixed()} mg</li>
          <li>Energy: {food.calories.toFixed()} kcal</li>
          <li>Fat: {food.digest[0].total.toFixed()} g</li>
          <li>Carbs: {food.digest[2].total.toFixed()} g</li>
          <li>Cholesterol: {food.digest[3].total.toFixed()} mg</li>
        </ul>
        <div>
          <img
            src={food.image}
            alt={food.label}
            width="200px"
            className="rounded-lg"
          />
        </div>
        <ul className="mt-5">
          <p className="text-xl font-semibold text-red-700">Recipe</p>
          {food.ingredientLines.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;


//! ABOUT DAN DEVAM...
