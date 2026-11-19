
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// Components
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import Favourites from "./pages/Favourites.jsx";

// Context
import { FavouriteProvider } from "./context/FavouriteContext.jsx";

// Styles
import "./styles/App.css";
import "./styles/home.css";
import "./styles/Navbar.css";
import "./styles/Pages.css";
import "./styles/RecipeCard.css";
import "./styles/Responsive.css";

function App() {
  return (
    <FavouriteProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="app">
          <NavBar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/recipes" element={<Recipes />} />

              <Route
                path="/recipes/:id"
                element={<RecipeDetail />}
              />

              <Route
                path="/favourites"
                element={<Favourites />}
              />

              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </FavouriteProvider>
  );
}

export default App;
