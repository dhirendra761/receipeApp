import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "effe8fc5";
  const APP_KEY = "fc40b23ccff08eae0a44a07c5ca1e168";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getReceipies();
  }, [query]);
  const getReceipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getQuery}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={getSearch}
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <div className="receips">
        {recipes.map((item, i) => (
          <Recipe
            key={i}
            title={item.recipe.label}
            calories={item.recipe.calories}
            img={item.recipe.image}
            source={item.recipe.source}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
