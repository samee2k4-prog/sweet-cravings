
import { useEffect, useState } from "react";
import API from "../api.js";

function useRecipes(searchTerm = "dessert") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRecipes() {
      try {
        setLoading(true);
        setError("");

        const response = await API.get("search.php", {
          params: { s: searchTerm },
          signal: controller.signal,
        });

        setData(response.data.meals || []);
      } catch (err) {
        if (err.code !== "ERR_CANCELED") {
          console.error("Recipe API Error:", err);
          setError("Unable to load recipes. Please try again.");
          setData([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchRecipes();

    return () => controller.abort();
  }, [searchTerm]);

  return { data, loading, error };
}

export default useRecipes;
export { useRecipes };
