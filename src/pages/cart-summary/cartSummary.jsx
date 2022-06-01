import './cart-summary.css';
import { useCart } from '../../contexts';

const CartSummary = () => {
    const { cartItems } = useCart();

    return (
        <div>
            <h2>Order Summary [WIP]</h2>
            {cartItems?.items.map((item) => (
                <div className="cart-items" key={item?._id}>
                    <div className="cart-item-card cart-summary-items">
                        <div className="cart-asset-container">
                            <img
                                src={item?.asset}
                                alt="cart item asset"
                                className="cart-item-asset"
                            />
                        </div>

                        <div className="cart-item-details">
                            <div className="cart-item-info">
                                <p className="item-name">{item?.title}</p>
                                <p className="item-price">
                                    Rs{' '}
                                    {(item?.price - (item?.price * item?.discount) / 100).toFixed(
                                        2,
                                    )}{' '}
                                    <strike>{item?.price}</strike>{' '}
                                </p>
                                <p className="item-discount">{item?.discount}% off</p>
                                <div className="item-quantity">
                                    <p>Quantity</p>
                                    <div className="item-qty">
                                        <div className="qty">{item?.qty}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <h3>Your products will reach you in 2-3 days</h3>
        </div>
    );
};

export { CartSummary };
