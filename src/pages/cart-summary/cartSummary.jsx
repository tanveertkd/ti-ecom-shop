import './cart-summary.css';
import { useCart } from '../../contexts';

const CartSummary = () => {
    const { cartItems } = useCart();

    return (
        <div className='summary-container'>
            <h2>Order Summary</h2>

            {cartItems?.orderedItems.map((item) => (
                <div className="summary-items" key={item?._id}>
                    <div className="cart-summary-card">
                        <div className="summary-asset-container">
                            <img
                                src={item?.asset}
                                alt="summary item asset"
                                className="summary-item-asset"
                            />
                        </div>

                        <div className="summary-item-details">
                            <div className="summary-item-info">
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
