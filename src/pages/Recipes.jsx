
import React from "react";
import { useSearchParams } from "react-router-dom";

import { useRecipes } from "../hooks/useRecipes";
import { useFavourites } from "../context/FavouriteContext";

import RecipeCard from "../components/RecipeCard";
import SearchForm from "../components/SearchForm";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import "../styles/Pages.css";

function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "dessert";

  const { data, loading, error } = useRecipes(searchTerm);

  const {
    addFavourite,
    removeFavourite,
    isFavourite,
  } = useFavourites();

  const handleSearch = (value) => {
    const cleanedValue = value.trim();

    if (cleanedValue) {
      setSearchParams({ search: cleanedValue });
    }
  };

  const handleFavourite = (recipe) => {
    if (isFavourite(recipe.idMeal)) {
      removeFavourite(recipe.idMeal);
    } else {
      addFavourite(recipe);
    }
  };

  return (
    <main className="page-container">

      {/* Page Heading */}
      <section className="page-heading">
        <p className="section-label">
          DISCOVER SOMETHING DELICIOUS
        </p>

        <h1>Explore Recipes</h1>

        <p>
          Search for your favourite desserts and discover
          delicious recipes.
        </p>
      </section>

      {/* Search */}
      <SearchForm
        onSearch={handleSearch}
        initialValue={searchTerm}
        placeholder="Search chocolate, cake, cookies..."
      />

      {/* Recipe Results */}
      <section className="recipes-section">

        <div className="results-heading">
          <h2>Our Recipe Collection</h2>

          {!loading && !error && (
            <p>{data.length} recipes found</p>
          )}
        </div>

        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && data.length === 0 && (
          <div className="empty-state">
            <h2>No recipes found</h2>

            <p>
              Try searching for chocolate, cake or another dessert.
            </p>
          </div>
        )}

        {!loading && !error && data.length > 0 && (
          <div className="recipes-grid">

            {data.map((recipe) => (
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
    </main>
  );
}

export default Recipes;
