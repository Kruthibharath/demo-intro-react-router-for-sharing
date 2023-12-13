import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Products from "../products/products";
import About from "../about/about";
import Help from "../help/help";
import { MainLayout } from "../layouts/main_layouts";

export const Router = () => {
  <Routes>
    <Route path="/" element={<MainLayout />} />
    <Route index element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about" element={<About />} />
    <Route path="/help" element={<Help />} />
  </Routes>;
};
