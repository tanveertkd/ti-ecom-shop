import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';
import { useCart } from '../../contexts/cart-context';

import './product-item.css';

const ProductItem = ({ product }) => {
    const { auth } = useAuth();
    const { addToCartHandler } = useCart();
    const navigate = useNavigate();

    return (
        <div className="product-card" key={product.id}>
            <div>
                <div className="card-top-half">
                    <i className="fas fa-regular fa-heart product-fav-icn fav-active"></i>
                    <div className="product-asset-container">
                        <img
                            src={product.asset}
                            alt="product body asset"
                            className="product-body-asset"
                        />
                    </div>

                    <div className="card-top-half-text">
                        <p className="product-item-title">{product.title}</p>
                        <p className="product-item-price">Rs {product.price}</p>
                    </div>
                </div>
                <button
                    className="product-item-cta"
                    onClick={auth ? () => addToCartHandler(product) : () => navigate('/login')}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export { ProductItem };
