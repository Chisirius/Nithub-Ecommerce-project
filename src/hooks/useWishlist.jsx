import {useContext} from "react";
import {WishlistContext} from "../hooks/wishlistContext";

export const useWishlist = () => {
  const {
    wishlistIds,
    wishlist,
    toggleWishlist,
    addWish,
    removeWish,
    notify,
  } = useContext(WishlistContext);

  return {
    wishlist,
    toggleWishlist,
    addWish,
    removeWish,
    notify,
    wishlistIds
  };
};