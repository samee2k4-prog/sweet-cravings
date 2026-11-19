
import React from "react";
import { Link } from "react-router-dom";

import { useFavourites } from "../context/FavouriteContext";
import RecipeCard from "../components/RecipeCard";

import "../styles/Pages.css";

function Favourites() {
  const {
    favourites,
    removeFavourite,
    isFavourite,
  } = useFavourites();

  const handleFavourite = (recipe) => {
    removeFavourite(recipe.idMeal);
  };

  return (
    <main className="page-container favourites-page">

      <section className="page-heading">
        <p className="section-label">YOUR SWEET COLLECTION</p>

        <h1>My Favourites</h1>

        <p>
          All your favourite dessert recipes in one place.
        </p>
      </section>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <h2>No Favourites Yet</h2>

          <p>
            You haven't saved any recipes yet.
            Click the heart button on a recipe to add it here.
          </p>

          <Link to="/recipes" className="primary-button">
            Explore Recipes
          </Link>
        </div>
      ) : (
        <>
          <div className="results-heading">
            <h2>Your Saved Recipes</h2>

            <p>
              {favourites.length} recipes saved
            </p>
          </div>

          <div className="recipes-grid">
            {favourites.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                isFavourite={isFavourite(recipe.idMeal)}
                onToggleFavourite={handleFavourite}
              />
            ))}
          </div>
        </>
      )}

    </main>
  );
}

export default Favourites;
