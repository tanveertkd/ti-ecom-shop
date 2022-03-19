import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Showcase } from "./components/Showcase/Showcase";
import { Footer } from "./components/Footer/Footer";

import {Routes, Route} from "react-router-dom"

import { Home } from "./pages/home/home";
import {ProductListing} from "./pages/product-listing/product-listing"

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Hero />
      <Showcase />
      <Footer /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="products" element={ <ProductListing /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
