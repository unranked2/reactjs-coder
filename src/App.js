import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Importar y renderizar el BrowserRouter conteniendo nuestra App
// 2. Importar Routes y Route y crear nuestras Rutas
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos" />}
          />
          <Route
            path="/category/:categoryid"
            element={<ItemListContainer greeting="Bienvenidos" />}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
