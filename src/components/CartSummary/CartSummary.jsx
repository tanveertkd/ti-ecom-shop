import './CartSummary.css';

const CartSummary = () => {
    return (
        <div class="cart-summary">
            <div class="cart-summary-head">Price Details</div>
            <hr />
            <ul class="cart-summary-items">
                <ul class="cart-summary-item">
                    <li class="summary-item">Price (2 Items)</li>
                    <li class="summary-item">Rs 4999</li>
                </ul>

                <ul class="cart-summary-item">
                    <li class="summary-item">Discount</li>
                    <li class="summary-item">Rs -1999</li>
                </ul>

                <ul class="cart-summary-item">
                    <li class="summary-item">Delivery Charges</li>
                    <li class="summary-item">Rs 499</li>
                </ul>
            </ul>
            <hr />
            <div class="cart-summary-total">
                <ul class="cart-summary-item">
                    <li class="summary-item summary-total-item">Total Amount</li>
                    <li class="summary-item summary-total-item">Rs 3499</li>
                </ul>
            </div>
            <hr />
            <div class="cart-summary-savings">You will save Rs 1999 on this order.</div>

            <div class="item-buttons">
                <button class="item-card-btn summary-btn">Place Order</button>
            </div>
        </div>
    );
};

export { CartSummary };