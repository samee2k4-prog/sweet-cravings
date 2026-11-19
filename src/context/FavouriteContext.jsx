
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FavouriteContext = createContext(null);

export function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem("dessert-favourites");
      const parsed = saved ? JSON.parse(saved) : [];

      return Array.isArray(parsed)
        ? parsed.filter((item) => item && item.idMeal)
        : [];
    } catch (error) {
      console.error("Unable to load favourites:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "dessert-favourites",
        JSON.stringify(favourites)
      );
    } catch (error) {
      console.error("Unable to save favourites:", error);
    }
  }, [favourites]);

  const addFavourite = (recipe) => {
    if (!recipe?.idMeal) return;

    setFavourites((previous) => {
      const exists = previous.some(
        (item) => item.idMeal === recipe.idMeal
      );

      return exists ? previous : [...previous, recipe];
    });
  };

  const removeFavourite = (recipeId) => {
    setFavourites((previous) =>
      previous.filter(
        (item) => item.idMeal !== recipeId
      )
    );
  };

  const isFavourite = (recipeId) =>
    favourites.some(
      (item) => item.idMeal === recipeId
    );

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouriteContext);

  if (!context) {
    throw new Error(
      "useFavourites must be used inside FavouriteProvider"
    );
  }

  return context;
}
