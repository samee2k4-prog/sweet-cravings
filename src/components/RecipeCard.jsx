
import React from "react";
import { Link } from "react-router-dom";

import "../styles/RecipeCard.css";

function RecipeCard({
  recipe,
  isFavourite = false,
  onToggleFavourite,
}) {
  if (!recipe) return null;

  return (
    <article className="recipe-card">

      {/* Recipe Image */}
      <div className="recipe-card-image">

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          loading="lazy"
        />

        {/* Favourite Button */}
        <button
          type="button"
          className={`favourite-button ${
            isFavourite ? "active" : ""
          }`}
          onClick={() => onToggleFavourite?.(recipe)}
          aria-label={
            isFavourite
              ? "Remove from favourites"
              : "Add to favourites"
          }
          aria-pressed={isFavourite}
        >
          {isFavourite ? "♥" : "♡"}
        </button>

      </div>

      {/* Recipe Information */}
      <div className="recipe-card-content">

        <p className="recipe-category">
          {recipe.strCategory || "Dessert"}
        </p>

        <h3>{recipe.strMeal}</h3>

        <div className="recipe-card-footer">

          <Link
            to={`/recipes/${recipe.idMeal}`}
            className="view-recipe-button"
          >
            View Recipe
          </Link>

        </div>

      </div>

    </article>
  );
}

export default RecipeCard;
