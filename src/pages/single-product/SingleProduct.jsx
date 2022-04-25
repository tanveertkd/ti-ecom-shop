import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts';
import { getDiscountedPrice } from '../../services';
import './SingleProduct.css';

const SingleProduct = () => {

    const { productId } = useParams();
    const { state: {singleProduct}, getProductByIdHandler } = useProducts();
    console.log(productId);
    
    useEffect(() => getProductByIdHandler(productId), []);
    console.log('single product ', singleProduct);

    // const { _id, asset, title, rating, price, discount } = singleProduct.product;
    
    return (
        <div class="product-item-body">
            <div class="section-left">
                <img
                    src={singleProduct.product?.asset}
                    alt="product img"
                    class="product-image"
                />
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
                            <input type="checkbox" class="rating" value="1" name="radio" checked />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        <label>
                            <input type="checkbox" class="rating" value="2" name="radio" checked />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        <label>
                            <input type="checkbox" class="rating" value="3" name="radio" checked />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        <label>
                            <input type="checkbox" class="rating" value="4" name="radio" checked />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        <label>
                            <input type="checkbox" class="rating" value="5" name="radio" />
                            <i class="fas fa-star rating-icn"></i>
                        </label>
                        {singleProduct.product?.rating}/5
                    </div>
                </form>

                <hr />

                <p class="item-price">
                    Rs {getDiscountedPrice(singleProduct.product?.price, singleProduct.product?.discount)} <sup>00</sup> <strike>{singleProduct.product?.price}/-</strike>
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
                    <button class="prod-btn btn-cta-buy">Buy Now</button>
                    <button class="prod-btn btn-cta-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export { SingleProduct };
