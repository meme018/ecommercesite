import { Route, Router, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Shopbycatagory from "./components/Shopbycategory";
import Footer from "./components/Footer";
import ProductView from "./pages/ProductView";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shopbycatagory" element={<Shopbycatagory />} />
        <Route path="ProductView" element={<ProductView />} />
        <Route path="ProductListing" element={<ProductListing />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="LoginPage" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
