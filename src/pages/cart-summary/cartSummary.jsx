import { useCart } from '../../contexts';

const CartSummary = () => {
    const { cartItems } = useCart();
    console.log(cartItems);
    return (
        <div>
            <h2>Cart Summary</h2>
            {cartItems?.items.map(item => (
                <div>
                    Product name {item?.title}
                </div>
            ))}
            <h3>Your products will reach you in 2-3 days</h3>
        </div>
    );
};

export { CartSummary };
