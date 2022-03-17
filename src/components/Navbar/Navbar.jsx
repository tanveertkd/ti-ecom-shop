import './navbar.css';
const Navbar = () => {
    return(
        <div>
            <nav className="nav-main">
                {/*  Nav left */}
                <ul className="nav-main-left nav-main-ul">
                    <li className="nav-main-li">
                        <a href="./index.html" className="nav-main-item">TI</a>
                    </li>
                </ul>

                {/* {Nav middle} */}
                <ul className="nav-main-middle nav-main-ul">
                    <li className="nav-main-li">
                        <label for="nav-main-search" className="nav-item-search">
                            <i className="fa-solid fa-magnifying-glass nav-main-middle-icn"></i>
                            <input className="nav-item-search-input" type="text" placeholder="Looking for something?"
                                name="nav-search" />
                        </label>
                    </li>
                </ul>

                {/* Nav right */}
                <ul className="nav-main-right nav-main-ul">
                    <li className="nav-main-li">
                        <a href="./routes/product.html" className="nav-main-item nav-btn-login">Products</a>
                    </li>
                    <li className="nav-main-li">
                        <a href="./routes/login.html" className="nav-main-item nav-btn-login">Login</a>
                    </li>
                    <li className="nav-main-li">
                        <a href="./routes/cart.html" className="nav-main-item">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                    <li className="nav-main-li">
                        <a href="./routes/wishlist.html" className="nav-main-item">
                            <i className="fa-regular fa-heart"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export {Navbar}