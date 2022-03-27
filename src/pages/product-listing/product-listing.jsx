import axios from 'axios';
import { useEffect, useState } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useProducts } from '../../contexts';

import { Toaster } from 'react-hot-toast';

import {
    getSortedProducts,
    getProductCategory,
    getProductRating,
    getPriceRange,
} from '../../utils';

import './product-listing.css';

const ProductListing = () => {
    const { state, dispatch } = useProducts();
    const { sortBy, category, rating, priceRangeValue } = state.filters;

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { products },
                } = await axios.get('/api/products');
                dispatch({ type: 'NO_FILTER', payload: products });
            } catch (e) {
                console.log(e);
            }
        })();
    }, [dispatch]);

    //Product List Filters

    const sorted = getSortedProducts(state.data, sortBy);

    const categoryFilter = getProductCategory(sorted, category);

    const priceRangeFilter = getPriceRange(categoryFilter, priceRangeValue);

    const productRatingFilter = getProductRating(priceRangeFilter, rating);

    const [sidebarStatus, setSidebarStatus] = useState("filter-container");

    const toggleSidebar = () => setSidebarStatus(() => sidebarStatus === "filter-container" ? ".filter-container-active" : "filter-container");

    return (
        <div className="product-listing">
            <h2>Products</h2>
            <div className="product-listing-body">
                <div className={ sidebarStatus }>
                    <Filter />
                </div>
                
                <div className="secondary-container">
                    <div class="sidebar-responsive" onClick={ () => toggleSidebar() }>
                        <span>
                            Filters
                            <i class="fas fa-regular fa-filter filter-icn"></i>
                        </span>
                    </div>
                    <div className="product-card-container">
                        {productRatingFilter?.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                </div>
                
            </div>
            <Toaster />
        </div>
    );
};

export { ProductListing };
