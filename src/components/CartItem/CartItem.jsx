import { useCart } from '../../contexts';
import './CartItem.css';

const CartItem = () => {
    const { cartItems } = useCart();
    const { handleDelete } = useCart();

    return (
        <div>
            {cartItems.items.length > 0 ? (
                cartItems.items?.map((item) => (
                    <div className="cart-items"
                    key={item._id}>
                        <div className="cart-item-card">
                            <img
                                src={item.asset}
                                alt="cart item asset"
                                className="cart-item-asset"
                            />
                            <div className="cart-item-details">
                                <div className="cart-item-info">
                                    <p className="item-name">{item.title}</p>
                                    <p className="item-price">Rs {item.price} </p>
                                    <p className="item-discount">50% off</p>
                                    <div className="item-quantity">
                                        <p>Quantity</p>
                                        <div className="item-qty">
                                            <button className="item-qty-btn item-qty-minus">
                                                -
                                            </button>
                                            <div className="qty">{item.qty}</div>
                                            <button className="item-qty-btn item-qty-add">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-buttons">
                                    <button className="item-card-btn item-btn-cart"
                                    onClick={ () => handleDelete(item._id) }>
                                        Remove From Cart
                                    </button>
                                    <button className="item-card-btn item-btn-wishlist">
                                        Move to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>Your cart is empty!</div>
            )}
        </div>
    );
};

export { CartItem };
