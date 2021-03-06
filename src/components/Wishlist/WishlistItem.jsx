import { useNavigate } from 'react-router-dom';
import { useAuth, useCart, useWishlist } from '../../contexts';
import './WishlistItem.css';

const WishlistItem = () => {
    const { auth } = useAuth();
    const { wishlistItems, removeFromWishlistHandler } = useWishlist();
    const { cartItems, addToCartHandler } = useCart();
    const navigate = useNavigate();
    const checkCart = (itemId) => cartItems.items.find((item) => item._id === itemId);

    return (
        <div className="product-body-cards wishlist-cards">
            {wishlistItems.items.length > 0 ? (
                wishlistItems.items?.map((item) => {
                    const { _id, asset, title, price, discount } = item;

                    return (
                        <div className="product-card wishlist-card" key={_id}>
                            <div className="card-top-half">
                                <i
                                    className="fas fa-regular fa-trash product-fav-icn fav-active"
                                    onClick={() => removeFromWishlistHandler(_id, title)}
                                ></i>
                                <div className="product-asset-container">
                                    <img
                                        src={asset}
                                        alt="product body asset"
                                        className="product-body-asset"
                                    />
                                </div>
                                <div className="card-top-half-text">
                                    <p className="product-item-title">{title}</p>
                                    <p className="product-item-price">
                                        Rs {(price - (price * discount) / 100).toFixed(2)}{' '}
                                        <strike>{price}/-</strike>{' '}
                                    </p>
                                </div>
                            </div>
                            {/* <button
                                className="product-item-cta product-cta-active"
                                onClick={() => addToCartHandler(item)}
                            >
                                Add To Cart
                            </button> */}
                            <button
                                className="product-item-cta"
                                onClick={
                                    auth
                                        ? checkCart(_id)
                                            ? () => navigate('/cart')
                                            : () => addToCartHandler(item)
                                        : () => navigate('/login')
                                }
                            >
                                {auth && checkCart(_id) ? 'Go To Cart' : 'Add To Cart'}
                            </button>
                        </div>
                    );
                })
            ) : (
                <div>Your Wishlist is empty</div>
            )}
        </div>
    );
};

export { WishlistItem };
