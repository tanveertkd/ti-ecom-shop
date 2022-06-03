import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategories, useProducts } from '../../contexts';

import './showcase.css';

const Showcase = () => {
    const { categoryItems, setCategoryItems } = useCategories();
    const { dispatch } = useProducts();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const {
                data: { categories },
            } = await axios.get('./api/categories');
            setCategoryItems(categories);
        })();
    }, [setCategoryItems]);

    return (
        <div className="showcase-body">
            <h2 className="showcase-heading">Categories</h2>
            <div className="card-parent">
                {categoryItems?.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <div className="card-container card-img-vertical">
                                <img src={item.asset} alt="card asset" className="card-image" />
                                <div className="card-body-content">
                                    <h3 className="card-head">{item.categoryName}</h3>
                                    <p className="card-body">{item.description}</p>
                                    <p className="card-body">Staring from Rs 999!</p>
                                    <div className="card-buttons">
                                        <button
                                            className="card-btn-buy"
                                            onClick={() => navigate('/products')}
                                        >
                                            View Products
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <span className="card-badge">NEW!</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { Showcase };
