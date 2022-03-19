import axios from "axios";
import { useEffect } from "react";
import { Filter } from "../../components/Filter/Filter";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { useProducts } from "../../contexts/product-context";
import { getPriceRange } from "../../utils/get-price-range";
import { getProductCategory } from "../../utils/get-product-category";
import { getProductRating } from "../../utils/get-product-rating";
import { getSortedProducts } from "../../utils/sort-products";

import "./product-listing.css";

const ProductListing = () => {
    
    const { state, dispatch } = useProducts();
    const { sortBy, category, rating, priceRangeValue } = state.filters;

    useEffect(()=>{
        (async () => {
            try{
                const {data: {products}} = await axios.get("/api/products");
                dispatch({type: "NO_FILTER", payload: products});
            } catch(e) {
                console.log(e);
            }
        })()
    }, [dispatch])

    //Product List Filters

    const sorted = getSortedProducts( state.data, sortBy );

    const categoryFilter = getProductCategory(sorted, category);
    
    const priceRangeFilter = getPriceRange(categoryFilter, priceRangeValue);

    const productRatingFilter = getProductRating(priceRangeFilter, rating);

    return(
        <div className="product-listing">
            <h2>Products</h2>
            <div className="product-listing-body">
                <Filter />
                <div className="product-card-container">
                    {productRatingFilter?.map(product => (
                        <ProductItem product = {product} key={product.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export {ProductListing};