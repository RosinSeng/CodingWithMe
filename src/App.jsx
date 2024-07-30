import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Accessories from "./Pages/Accessories";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/accessories" element={<Accessories/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
