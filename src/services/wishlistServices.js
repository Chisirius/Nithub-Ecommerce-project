import api from "./api";

// -------------------------
// GET WISHLIST
// -------------------------
export const getWishlist = async () => {
  const res = await api.get("/wishlist");
  return res.data;
};

// -------------------------
// ADD TO WISHLIST
// -------------------------
export const addToWishlist = async (productId) => {
  const res = await api.post("/wishlist/add", {
    productId,
  });

  return res.data;
};

// -------------------------
// REMOVE FROM WISHLIST
// -------------------------
export const removeFromWishlist= async (itemId) => {
  const res = await api.delete(`/wishlist/${itemId}`);
  return res.data;
};



