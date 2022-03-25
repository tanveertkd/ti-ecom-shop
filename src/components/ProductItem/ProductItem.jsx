import { useNavigate } from 'react-router-dom';
import { useAuth, useWishlist } from '../../contexts';
import { useCart } from '../../contexts/cart-context';

import './product-item.css';

const ProductItem = ({ product }) => {
    const { auth } = useAuth();
    const { cartItems, addToCartHandler, updateHandler } = useCart();
    const { wishlistItems, addToWishlistHandler, removeFromWishlistHandler } = useWishlist();
    const navigate = useNavigate();

    const { _id, asset, title, price, discount } = product;

    const checkWishlist = wishlistItems.items.find((item) => item._id === _id);
    const checkCart = cartItems.items.find((item) => item._id === _id);

    return (
        <div className="product-card" key={_id}>
            <div>
                <div className="card-top-half">
                    <i
                        className={
                            checkWishlist
                                ? 'fas fa-regular fa-heart product-fav-icn fav-active'
                                : 'far fa-regular fa-heart product-fav-icn fav-active'
                        }
                        onClick={
                            !checkWishlist
                                ? () => addToWishlistHandler(product)
                                : () => removeFromWishlistHandler(_id)
                        }
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
                    onClick={
                        auth
                            ? checkCart
                                ? () => updateHandler(product, 'increment')
                                : () => addToCartHandler(product)
                            : () => navigate('/login')
                    }
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export { ProductItem };
