import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido a Terere!" />}
          />
          <Route
            path="/category/:categoryName"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
