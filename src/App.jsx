import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Favourites from "./pages/Favourites";
import { FavouriteProvider } from "./context/FavouriteContext";
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