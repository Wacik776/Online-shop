import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Cart } from "./pages/Cart/Cart";
import { Catalog } from "./pages/Catalog/Catalog";
import { Contact } from "./pages/Contact/Contact";
import { Product } from "./pages/Product/Product";
import { Room } from "./pages/Room/Room";
import { NotFound } from "./pages/NotFound/NotFound";
import "./styles/style.scss";
import { useEffect } from "react";
import { getUsers } from "./config/api/api";

export const App: React.FC = () => {
  useEffect(() => {
    getUsers()
      .then((response) => console.log(response?.data))
      .catch((err) => console.log(err));
  },[]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/room" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
