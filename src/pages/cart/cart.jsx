import { Toaster } from 'react-hot-toast';
import { CartItem } from '../../components/CartItem/CartItem';
import { CartSummary } from '../../components/CartSummary/CartSummary';
import { useCart } from '../../contexts';

import './cart.css';

const Cart = () => {
    const { cartItems } = useCart();
    return (
        <div class="cart-parent">
            <div class="cart-header">My Cart</div>
            <div class="cart-body-container">
            <Toaster />
                {cartItems.items.length > 0 ? (
                    <div class="cart-body">
                        <CartItem />
                        <CartSummary />
                    </div>
                ) : (
                    <div>
                        Your cart is empty!{' '}
                    </div>
                )}
            </div>
        </div>
    );
};

export { Cart };
