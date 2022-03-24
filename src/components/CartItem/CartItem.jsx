import { useCart, useWishlist } from '../../contexts';
import './CartItem.css';

const CartItem = () => {
    const { cartItems } = useCart();
    const { handleDelete, updateHandler } = useCart();
    const { addToWishlistHandler } = useWishlist();

    return (
        <div>
            {cartItems.items.length > 0 ? (
                cartItems.items?.map((item) => {

                    const { _id, asset, title, price, qty, discount } = item;

                    return <div className="cart-items" key={_id}>
                        <div className="cart-item-card">
                            <img
                                src={asset}
                                alt="cart item asset"
                                className="cart-item-asset"
                            />
                            <div className="cart-item-details">
                                <div className="cart-item-info">
                                    <p className="item-name">{title}</p>
                                    <p className="item-price">
                                        Rs{' '}
                                        {(price - (price * discount) / 100).toFixed(
                                            2,
                                        )}{' '}
                                        <strike>{price}</strike>{' '}
                                    </p>
                                    <p className="item-discount">{discount}% off</p>
                                    <div className="item-quantity">
                                        <p>Quantity</p>
                                        <div className="item-qty">
                                            <button
                                                className="item-qty-btn item-qty-minus"
                                                onClick={() => updateHandler(item, 'decrement')}
                                            >
                                                -
                                            </button>
                                            <div className="qty">{qty}</div>
                                            <button
                                                className="item-qty-btn item-qty-add"
                                                onClick={() => updateHandler(item, 'increment')}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-buttons">
                                    <button
                                        className="item-card-btn item-btn-cart"
                                        onClick={() => handleDelete(_id)}
                                    >
                                        Remove From Cart
                                    </button>
                                    <button className="item-card-btn item-btn-wishlist"
                                    onClick={() => addToWishlistHandler(item)}>
                                        Move to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            ) : (
                <div>Your cart is empty!</div>
            )}
        </div>
    );
};

export { CartItem };
