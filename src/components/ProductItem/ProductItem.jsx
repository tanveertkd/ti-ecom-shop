import { useNavigate } from 'react-router-dom';
import { useAuth, useWishlist } from '../../contexts';
import { useCart } from '../../contexts/cart-context';

import './product-item.css';

const ProductItem = ({ product }) => {
    const { auth } = useAuth();
    const { addToCartHandler } = useCart();
    const { wishlistItems, addToWishlistHandler } = useWishlist();
    const navigate = useNavigate();

    const { _id, asset, title, price, discount } = product;

    const check = wishlistItems.items.find((item) => item._id === product._id);

    return (
        <div className="product-card" key={_id}>
            <div>
                <div className="card-top-half">
                    <i
                        className={
                            check
                                ? 'fas fa-regular fa-heart product-fav-icn fav-active'
                                : 'far fa-regular fa-heart product-fav-icn fav-active'
                        }
                        onClick={() => addToWishlistHandler(product)}
                    ></i>
                    <div className="product-asset-container">
                        <img src={asset} alt="product body asset" className="product-body-asset" />
                    </div>

                    <div className="card-top-half-text">
                        <p className="product-item-title">{title}</p>
                        <p className="product-item-price">
                            Rs {(price - (price * discount) / 100).toFixed(2)}{' '}
                            <strike>{price}</strike>{' '}
                        </p>
                        <p className="product-item-price">{discount}% off!</p>
                    </div>
                </div>
                <button
                    className="product-item-cta"
                    onClick={auth ? () => addToCartHandler(product) : () => navigate('/login')}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export { ProductItem };
