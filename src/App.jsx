import './App.css';

// Components Import
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { SignIn } from './components/Authentication/signin';
import { SignUp } from './components/Authentication/signup';
import { Routes, Route } from 'react-router-dom';

//Pages Import
import { Home } from './pages/home/home';
import { ProductListing } from './pages/product-listing/product-listing';
import { Cart } from './pages/cart/cart';
import { Wishlist } from './pages/wishlist/wishlist';
import { SingleProduct } from './pages/single-product/SingleProduct';

//Mockman
import Mockman from 'mockman-js';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import { CartSummary } from './pages/cart-summary/cartSummary';

function App() {
    return (
        <div className="App">
            <div className="section-one">
                <Navbar />
            </div>

            <div className="section-two">
                <Routes>
                    <Route path="mockman" element={<Mockman />} />
                    <Route path="/" element={<Home />} />
                    <Route path="products" element={<ProductListing />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="/product/:productId" element={<SingleProduct />} />

                    {/* Protected Routes */}
                    <Route path="/" element={<ProtectedRoutes />}>
                        <Route path="/cart" element={<Cart />} />
                        <Route path='/cartsummary' element={<CartSummary />} />
                    </Route>
                    <Route path="/" element={<ProtectedRoutes />}>
                        <Route path="/wishlist" element={<Wishlist />} />
                    </Route>
                </Routes>
            </div>

            <div className="section-three">
                <Footer />
            </div>
        </div>
    );
}

export default App;
