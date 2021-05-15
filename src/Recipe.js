import React from "react";
import Style from "./recipe.module.css";

const Recipe = ({ title, calories, img, source, ingredients }) => {
  return (
    <div className={Style.recipe}>
      <h1>{title}</h1>
      <h6>{calories}</h6>
      <ol>
        {ingredients.map((incredient, index) => (
          <li key={index}>{incredient.text}</li>
        ))}
      </ol>
      <img className={Style.image} src={img} alt={source} />
    </div>
  );
};
export default Recipe;
