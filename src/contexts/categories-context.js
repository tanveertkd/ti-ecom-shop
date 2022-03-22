import { createContext, useContext, useState } from "react";
const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
    const [categoryItems, setCategoryItems] = useState([]);

    return(
        <CategoryContext.Provider value={{categoryItems, setCategoryItems}}>
            {children}
        </CategoryContext.Provider>
    );
}

const useCategories = () => useContext(CategoryContext);

export {CategoryProvider, useCategories};