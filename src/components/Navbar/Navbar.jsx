import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useCart, useProducts, useWishlist } from '../../contexts';
import { debounceUtil } from '../../utils';

import './navbar.css';

const Navbar = () => {
    const { auth, signOutHandler } = useAuth();
    const { cartItems } = useCart();
    const { wishlistItems } = useWishlist();
    const { dispatch } = useProducts();
    const navigate = useNavigate();

    const itemsInCart = cartItems.items?.length;
    const itemsInWishlist = wishlistItems.items?.length;

    return (
        <div>
            <nav className="nav-main">
                {/*  Nav left */}
                <ul className="nav-main-left nav-main-ul">
                    <li className="nav-main-li">
                        <Link to="/" className="nav-main-item">
                            TI
                        </Link>
                    </li>
                </ul>

                {/* {Nav middle} */}
                <ul className="nav-main-middle nav-main-ul">
                    <li className="nav-main-li">
                        <label htmlFor="nav-main-search" className="nav-item-search">
                            <i
                                className="fa-solid fa-magnifying-glass nav-main-middle-icn"
                                onClick={() => navigate('/products')}
                            ></i>
                            <input
                                className="nav-item-search-input"
                                type="text"
                                placeholder="Looking for something?"
                                name="nav-search"
                                onChange={debounceUtil(
                                    (e) =>
                                        dispatch({
                                            type: 'SEARCH_PRODUCT',
                                            payload: e.target.value,
                                        }),
                                    400,
                                )}
                            />
                        </label>
                    </li>
                </ul>

                {/* Nav right */}
                <ul className="nav-main-right nav-main-ul">
                    <li className="nav-main-li">
                        <Link to="/products" className="nav-main-item nav-btn-login">
                            Products
                        </Link>
                    </li>
                    <li className="nav-main-li">
                        {!auth ? (
                            <Link to="/login" className="nav-main-item nav-btn-login">
                                Login
                            </Link>
                        ) : (
                            <div
                                className="nav-main-item nav-btn-login"
                                onClick={() => signOutHandler()}
                            >
                                Logout
                            </div>
                        )}
                    </li>
                    <li className="nav-main-li">
                        <Link to="/cart" className="nav-main-item badge">
                            <i className="fa-solid fa-cart-shopping nav-right-icn"></i>
                            {auth && itemsInCart > 0 && (
                                <span className="badge-info">{itemsInCart}</span>
                            )}
                        </Link>
                    </li>
                    <li className="nav-main-li">
                        <Link to="/wishlist" className="nav-main-item badge">
                            <i className="fa-regular fa-heart nav-right-icn"></i>
                            {auth && itemsInWishlist > 0 && (
                                <span className="badge-info">{itemsInWishlist}</span>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="nav-mobile">
                {/* {Nav middle mobile} */}
                <ul className="nav-main-middle-mobile nav-main-ul">
                    <li className="nav-main-li">
                        <label htmlFor="nav-main-search" className="nav-item-search">
                            <i className="fa-solid fa-magnifying-glass nav-main-middle-icn"></i>
                            <input
                                className="nav-item-search-input"
                                type="text"
                                placeholder="Looking for something?"
                                name="nav-search"
                                onChange={debounceUtil(
                                    (e) =>
                                        dispatch({
                                            type: 'SEARCH_PRODUCT',
                                            payload: e.target.value,
                                        }),
                                    400,
                                )}
                            />
                        </label>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export { Navbar };
