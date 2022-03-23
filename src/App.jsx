import "./App.css";

// Components Import
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { SignIn } from "./components/Authentication/signin";
import { SignUp } from "./components/Authentication/signup";
import { Routes, Route } from "react-router-dom"

//Pages Import
import { Home } from "./pages/home/home";
import { ProductListing } from "./pages/product-listing/product-listing"
import { Cart } from "./pages/cart/cart";

//Mockman
import Mockman from "mockman-js";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="mockman" element={ <Mockman /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="products" element={ <ProductListing /> } />
        <Route path="login" element={ <SignIn /> } />
        <Route path="signin" element={ <SignIn /> } />
        {/* <Route path="login" element={ <SignInSignUp />}  /> */}
        <Route path="signup" element={ <SignUp /> } />
        
        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/cart" element={ <Cart /> }/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
