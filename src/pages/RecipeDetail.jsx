import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import API from "../api.js";
import { useFavourites } from "../context/FavouriteContext";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import "../styles/Pages.css";

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    addFavourite,
    removeFavourite,
    isFavourite,
  } = useFavourites();

  useEffect(() => {
    const controller = new AbortController();

    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await API.get("lookup.php", {
          params: { i: id },
          signal: controller.signal,
        });

        const meals = response.data.meals;

        if (!meals || meals.length === 0) {
          setRecipe(null);
          setError("Recipe not found.");
          return;
        }

        setRecipe(meals[0]);
      } catch (err) {
        if (
          err.name !== "CanceledError" &&
          err.code !== "ERR_CANCELED"
        ) {
          setError("Unable to load this recipe. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchRecipe();

    return () => controller.abort();
  }, [id]);

  const handleFavourite = () => {
    if (!recipe) return;

    if (isFavourite(recipe.idMeal)) {
      removeFavourite(recipe.idMeal);
    } else {
      addFavourite(recipe);
    }
  };

  if (loading) return <Loader />;

  if (error) {
    return (
      <main className="page-container">
        <ErrorMessage message={error} />
        <Link to="/recipes" className="primary-button">
          Back to Recipes
        </Link>
      </main>
    );
  }

  if (!recipe) return null;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`]?.trim();
    const measure = recipe[`strMeasure${i}`]?.trim();

    if (ingredient) {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }

  return (
    <main className="page-container">
      <Link to="/recipes" className="back-link">
        ← Back to Recipes
      </Link>

      <section className="recipe-detail">
        <div className="recipe-detail-image">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
        </div>

        <div className="recipe-detail-content">
          <p className="section-label">
            {recipe.strCategory || "DELICIOUS RECIPE"}
          </p>

          <h1>{recipe.strMeal}</h1>

          <p className="recipe-area">
            Cuisine: {recipe.strArea || "Not specified"}
          </p>

          <button
            type="button"
            className="favourite-button"
            onClick={handleFavourite}
          >
            {isFavourite(recipe.idMeal)
              ? "♥ Remove from Favourites"
              : "♡ Save to Favourites"}
          </button>

          <h2>Ingredients</h2>

          <ul className="ingredients-list">
            {ingredients.map((item, index) => (
              <li key={index}>
                <span>{item.ingredient}</span>
                <span>{item.measure}</span>
              </li>
            ))}
          </ul>

          <h2>Instructions</h2>

          <p className="recipe-instructions">
            {recipe.strInstructions}
          </p>

          {recipe.strYoutube && (
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Watch Recipe Video
            </a>
          )}
        </div>
      </section>
    </main>
  );
}

export default RecipeDetail;
 