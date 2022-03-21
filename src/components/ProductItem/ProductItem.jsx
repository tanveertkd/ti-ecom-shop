import './product-item.css';

const ProductItem = ({ product }) => {
    return (
        <div class="product-card" key={product.id}>
            <div>
                <div class="card-top-half">
                    <i class="fas fa-regular fa-heart product-fav-icn fav-active"></i>
                    <div className="product-asset-container">
                        <img src={product.asset} alt="product body asset" class="product-body-asset" />
                    </div>
                    
                    <div class="card-top-half-text">
                        <p class="product-item-title">{product.title}</p>
                        <p class="product-item-price">Rs {product.price}</p>
                    </div>
                </div>
                <button class="product-item-cta">View Product</button>
            </div>
        </div>
    );
};

export { ProductItem };
