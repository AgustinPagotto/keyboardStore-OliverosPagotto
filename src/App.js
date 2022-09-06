import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer/>}     
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer/>}     
        />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer/>}     
        />
        <Route
          path="/cart/"
          element={<Cart/>}     
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
