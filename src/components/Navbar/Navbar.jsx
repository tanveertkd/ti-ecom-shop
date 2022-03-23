import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts';

import './navbar.css';

const Navbar = () => {
    const { auth, signOutHandler } = useAuth();

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
                        <label for="nav-main-search" className="nav-item-search">
                            <i className="fa-solid fa-magnifying-glass nav-main-middle-icn"></i>
                            <input
                                className="nav-item-search-input"
                                type="text"
                                placeholder="Looking for something?"
                                name="nav-search"
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
                        <Link to="/cart" className="nav-main-item">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </li>
                    <li className="nav-main-li">
                        <Link to="/products" className="nav-main-item">
                            <i className="fa-regular fa-heart"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export { Navbar };
