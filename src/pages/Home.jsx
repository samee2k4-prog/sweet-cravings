
import React from "react";
import { Link } from "react-router-dom";

import { useRecipes } from "../hooks/useRecipes";
import { useFavourites } from "../context/FavouriteContext";

import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import "../styles/home.css";

function Home() {
  const { data, loading, error } = useRecipes("chocolate");

  const {
    addFavourite,
    removeFavourite,
    isFavourite,
  } = useFavourites();

  const handleFavourite = (recipe) => {
    if (isFavourite(recipe.idMeal)) {
      removeFavourite(recipe.idMeal);
    } else {
      addFavourite(recipe);
    }
  };

  const featuredRecipes = data.slice(0, 8);

  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="section-label">
            WELCOME TO SWEETCRAVINGS
          </p>

          <h1>
            Discover Your Next
            <span> Favourite Dessert</span>
          </h1>

          <p>
            Explore delicious dessert recipes, discover new
            flavours and find something sweet to make today.
          </p>

          <Link to="/recipes" className="primary-button">
            Explore Recipes
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900"
            alt="Delicious chocolate cake"
          />
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="featured-section">

        <div className="section-heading">
          <div>
            <p className="section-label">HANDPICKED FOR YOU</p>
            <h2>Featured Desserts</h2>
            <p>
              Explore some delicious recipes from our collection.
            </p>
          </div>

          <Link to="/recipes" className="text-link">
            View All Recipes →
          </Link>
        </div>

        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && featuredRecipes.length === 0 && (
          <div className="empty-state">
            <h3>No recipes available</h3>
            <Link to="/recipes" className="primary-button">
              Explore Recipes
            </Link>
          </div>
        )}

        {!loading && !error && featuredRecipes.length > 0 && (
          <div className="recipes-grid">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                isFavourite={isFavourite(recipe.idMeal)}
                onToggleFavourite={handleFavourite}
              />
            ))}
          </div>
        )}

      </section>

      {/* Bottom Banner */}
      <section className="home-banner">
        <div>
          <p className="section-label">YOUR SWEET JOURNEY STARTS HERE</p>
          <h2>Find something delicious today.</h2>
          <p>
            Browse our recipe collection and save your favourites.
          </p>
        </div>

        <Link to="/recipes" className="primary-button">
          Discover Recipes
        </Link>
      </section>

    </main>
  );
}

export default Home;
