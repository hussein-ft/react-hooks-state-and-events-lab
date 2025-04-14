
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define the handleDarkModeClick function here
  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
