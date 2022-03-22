import { useProducts } from '../../contexts/product-context';
import './filter.css';

const Filter = () => {
    const { state, dispatch } = useProducts();
    const { sortBy, category, rating, priceRangeValue } = state.filters;
    const { p_eq, t_eq, t_apparel } = category;

    return (
        <div className="nav-sidebar-container">
            {/* <!-- Section 1 --> */}
            <ul className="nav-sidebar-ul nav-section-1">
                <li className="sidebar-header">Filters</li>
                <li className="sidebar-header">
                    <button
                        className="btn btn-default-outlined btn-clr"
                        onClick={() => dispatch({ type: 'CLEAR_FILTERS' })}
                    >
                        Clear
                    </button>
                </li>
            </ul>

            {/* <!-- Section 2 --> */}

            <ul className="nav-sidebar-ul">
                <li className="sidebar-header">Sort By</li>

                <li className="sidebar-item">
                    <div className="sidebar-item-sort">
                        <label for="sidebar-radio">
                            <input
                                type="radio"
                                id="sidebar-radio"
                                name="sort-radio"
                                value="low_to_high"
                                checked={sortBy === 'LOW_TO_HIGH'}
                                onClick={() => dispatch({ type: 'LOW_TO_HIGH' })}
                            />{' '}
                            Price - Low to High
                        </label>
                    </div>
                </li>

                <li className="sidebar-item">
                    <div className="sidebar-item-sort">
                        <label for="sidebar-radio-hl">
                            <input
                                type="radio"
                                id="sidebar-radio-hl"
                                name="sort-radio"
                                value="high_to_low"
                                checked={sortBy === 'HIGH_TO_LOW'}
                                onClick={() => dispatch({ type: 'HIGH_TO_LOW' })}
                            />{' '}
                            Price - High to Low
                        </label>
                    </div>
                </li>
            </ul>

            {/* <!-- Section 3 --> */}
            <ul className="nav-sidebar-ul">
                <li className="sidebar-header">Category</li>
                <li className="sidebar-item">
                    <div className="sidebar-item-checkbox">
                        <label for="protective-eq">
                            <input
                                type="checkbox"
                                id="protective-eq"
                                name="protective-eq"
                                value="Protective Equipment"
                                checked={p_eq}
                                // onChange={() => dispatch({ type: 'CATEGORY', payload: {p_eq: true}})}
                                onChange={() => dispatch({ type: 'P_EQ' })}
                            />
                            Protective Equipment
                        </label>
                    </div>
                </li>
                <li className="sidebar-item">
                    <div className="sidebar-item-checkbox">
                        <label for="training_eq">
                            <input
                                type="checkbox"
                                id="training_eq"
                                name="training_eq"
                                value="Training Equipments"
                                checked={t_eq}
                                onChange={() => dispatch({ type: 'T_EQ' })}
                            />
                            Training Equipments
                        </label>
                    </div>
                </li>
                <li className="sidebar-item">
                    <div className="sidebar-item-checkbox">
                        <label for="training_ap">
                            <input
                                type="checkbox"
                                id="training_ap"
                                name="training_ap"
                                value="Training Apparal"
                                checked={t_apparel}
                                onChange={() => dispatch({ type: 'T_APPAREL' })}
                            />
                            Training Apparal
                        </label>
                    </div>
                </li>
            </ul>

            {/* <!-- Section 4 --> */}
            <ul className="nav-sidebar-ul">
                <li className="sidebar-header">Rating</li>

                <li className="sidebar-item">
                    <div className="sidebar-item-rating">
                        <label for="sidebar-radio-4">
                            <input
                                type="radio"
                                id="sidebar-radio-4"
                                name="rating-radio"
                                value="4"
                                checked={rating === "4"}
                                onClick={(e) =>
                                    dispatch({ type: 'RATING', payload: e.target.value })
                                }
                            />
                            4 Stars & higher
                        </label>
                    </div>
                </li>
                <li className="sidebar-item">
                    <div className="sidebar-item-rating">
                        <label for="sidebar-radio-3">
                            <input
                                type="radio"
                                id="sidebar-radio-3"
                                name="rating-radio"
                                value="3"
                                checked={rating === "3"}
                                onClick={(e) =>
                                    dispatch({ type: 'RATING', payload: e.target.value })
                                }
                            />
                            3 Stars & higher
                        </label>
                    </div>
                </li>
                <li className="sidebar-item">
                    <div className="sidebar-item-rating">
                        <label for="sidebar-radio-2">
                            <input
                                type="radio"
                                id="sidebar-radio-2"
                                name="rating-radio"
                                value="2"
                                checked={rating === "2"}
                                onClick={(e) =>
                                    dispatch({ type: 'RATING', payload: e.target.value })
                                }
                            />
                            2 Stars & higher
                        </label>
                    </div>
                </li>
                <li className="sidebar-item">
                    <div className="sidebar-item-rating">
                        <label for="sidebar-radio-1">
                            <input
                                type="radio"
                                id="sidebar-radio-1"
                                name="rating-radio"
                                value="1"
                                checked={rating === "1"}
                                onClick={(e) =>
                                    dispatch({ type: 'RATING', payload: e.target.value })
                                }
                            />
                            1 Star & higher
                        </label>
                    </div>
                </li>
            </ul>

            {/* <!-- Section 5 --> */}
            <ul className="nav-sidebar-ul">
                <li className="sidebar-header">Price</li>

                <li className="sidebar-item">
                    <div className="slider-container">
                        <datalist id="tickmarks">
                            <option value="1000" label="1000"></option>
                            <option value="2000" label="2000"></option>
                            <option value="3000" label="3000"></option>
                            <option value="4000" label="4000"></option>
                            <option value="5000" label="5000"></option>
                        </datalist>
                        <input
                            type="range"
                            name=""
                            className="slider"
                            step="1000"
                            min="1000"
                            max="5000"
                            value={priceRangeValue}
                            onChange={(e) => dispatch({ type: 'PRICE', payload: e.target.value })}
                        />
                    </div>
                </li>
            </ul>

            {/* <!-- Nav Sidebar Ends --> */}
        </div>
    );
};

export { Filter };
