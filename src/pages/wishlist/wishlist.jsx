import { Toaster } from "react-hot-toast";
import { WishlistItem } from "../../components/Wishlist/WishlistItem";
import { useWishlist } from "../../contexts";
import './wishlist.css';

const Wishlist = () => {
    const { wishlistItems } = useWishlist();
    const { items } = wishlistItems;
    return(
        <div className="product-body-container wishlist-main-container">
            <div className="product-body-header wishlist-header">
                Wishlisted Products (Showing {items.length} products)
            </div>

            <div className="wishlist-container">
                <WishlistItem />  
                <Toaster />
            </div>          
        
        </div>
    )
}

export { Wishlist };