# Sweet Cravings – Dessert Recipe Search App
Sweet Cravings is a dessert recipe search application built using React. It allows users to explore dessert recipes, search for meals, view recipe details, and save their favourite recipes for later.
## Features
- Browse featured recipes on the homepage.
- Search for recipes using the search form.
- View individual recipe details.
- Display recipe images.
- View ingredients and cooking instructions.
- Add recipes to favourites.
- Remove recipes from favourites.
- Save favourite recipes using browser localStorage.
- Navigate between pages using React Router.
- Display loading, error, and empty states.
- Responsive layout for desktop, tablet, and mobile devices.
## Technologies Used
- React
- JavaScript
- HTML5
- CSS3
- Axios
- React Router DOM
- TheMealDB API
- Browser localStorage
- Vite
## API Integration
This project uses TheMealDB API to retrieve recipe information.
**Base URL:**
https://www.themealdb.com/api/json/v1/1/
**Search Recipes:**
https://www.themealdb.com/api/json/v1/1/search.php?s=chocolate
**Get Recipe Details:**
https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
## Installation and Setup
**1. Clone or download the repository.**
**2. Open the project folder in your terminal.**
**3. Install the required dependencies:**
```bash
npm install
```
**4. Start the development server:**
```bash
npm run dev
```
**5.** Open the local URL displayed in the terminal to view the application.
## Production Build
To create a production build:
```bash
npm run build
```
To preview the production build:
```bash
npm run preview
```
## Project Structure
```text
src/
├── components/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   ├── RecipeCard.jsx
│   ├── SearchForm.jsx
│   ├── Loader.jsx
│   └── ErrorMessage.jsx
│
├── context/
│   └── FavouriteContext.jsx
│
├── hooks/
│   └── useRecipes.js
│
├── pages/
│   ├── Home.jsx
│   ├── Recipes.jsx
│   ├── RecipeDetail.jsx
│   └── Favourites.jsx
│
├── styles/
│   ├── App.css
│   ├── home.css
│   ├── Navbar.css
│   ├── Pages.css
│   ├── RecipeCard.css
│   └── Responsive.css
│
├── api.js
├── App.jsx
└── main.jsx
```
## Favourite Management
The application uses React Context API to manage favourite recipes across different pages.
Favourite recipes are stored in the browser's localStorage. This allows users to access their saved recipes even after refreshing the page or reopening the application in the same browser.
## Assignment Details
**Assignment No.:** 5
**Project Name:** React Recipe Search App
## Author-sam
Created as part of a React development learning project.