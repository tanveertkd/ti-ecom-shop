import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth, useCart, useProducts, useWishlist } from '../../contexts';
import { getDiscountedPrice } from '../../services';
import './SingleProduct.css';

const SingleProduct = () => {
    const { productId } = useParams();
    const { auth } = useAuth();
    const navigate = useNavigate();
    const {
        state: { singleProduct },
        getProductByIdHandler,
    } = useProducts();
    const { cartItems, addToCartHandler } = useCart();
    const { wishlistItems, addToWishlistHandler, removeFromWishlistHandler } = useWishlist();

    useEffect(() => {
        getProductByIdHandler(productId);
    }, []);

    const checkWishlist = wishlistItems.items.find((item) => item._id === singleProduct?.product?._id);
    const checkCart = cartItems.items.find((item) => item._id === singleProduct?.product?._id);

    return (
        <div class="product-item-body">
            <div class="section-left">
                <img src={singleProduct.product?.asset} alt="product img" class="product-image" />
                <p>
                    <i class="fa-solid fa-magnifying-glass-plus"></i> Roll over image to zoom in
                </p>
            </div>
            <div class="section-right">
                <p class="product-title">{singleProduct.product?.title}</p>

                <p class="product-id">ID: ABC12334</p>

                <form class="rating-form">
                    <div class="rating-container">
                        <label>
                            <input
                                type="checkbox"
                                className="rating"
                                value="1"
                                name="radio"
                                checked
                            />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className="rating"
                                value="2"
                                name="radio"
                                checked
                            />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className="rating"
                                value="3"
                                name="radio"
                                checked
                            />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className="rating"
                                value="4"
                                name="radio"
                                checked
                            />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        <label>
                            <input type="checkbox" className="rating" value="5" name="radio" />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        {singleProduct.product?.rating}/5
                    </div>
                </form>

                <hr />

                <p class="item-price">
                    Rs{' '}
                    {getDiscountedPrice(
                        singleProduct.product?.price,
                        singleProduct.product?.discount,
                    )}{' '}
                    <sup>00</sup> <strike>{singleProduct.product?.price}/-</strike>
                </p>
                <p class="item-discount">-{singleProduct.product?.discount}% off!</p>
                <div class="item-offer-container">
                    <p class="item-payment-offers">
                        <i class="fa-solid fa-credit-card item-payment-icn"></i>Exciting offers with
                        credit cards.
                    </p>

                    <p class="item-payment-offers">
                        <i class="fa-brands fa-cc-visa item-payment-icn"></i>Zero Interest EMI on
                        select cards
                    </p>
                </div>

                <p class="item-stock">In Stock!</p>

                <div class="product-button-container">
                    <button
                        class="prod-btn btn-cta-buy"
                        onClick={
                            auth
                                ? checkCart
                                    ? () => navigate('/cart')
                                    : () => addToCartHandler(singleProduct?.product)
                                : () => navigate('/login')
                        }
                    >
                        {auth && checkCart ? 'Go To Cart' : 'Add To Cart'}
                    </button>
                    <button
                        class="prod-btn btn-cta-cart"
                        onClick={
                            auth
                                ? !checkWishlist
                                    ? () => addToWishlistHandler(singleProduct?.product)
                                    : () => removeFromWishlistHandler(singleProduct?.product?._id)
                                : () => navigate('/login')
                        }
                    >
                        {auth && checkWishlist ? 'Go To Wishlist' : 'Add To Wishlist'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export { SingleProduct };
