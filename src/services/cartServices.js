import api from "./api";

// -------------------------
// GET CART
// -------------------------
export const getCart = async () => {
  const res = await api.get("/cart");
  return res.data;
};

// -------------------------
// ADD TO CART
// -------------------------
export const addToCartAPI = async (productId, quantity = 1) => {
  const res = await api.post("/cart/add", {
    productId,
    quantity,
  });

  return res.data;
};

// -------------------------
// REMOVE ITEM
// -------------------------
export const removeFromCartAPI = async (itemId) => {
  const res = await api.delete(`/cart/${itemId}`);
  return res.data;
};

// -------------------------
// UPDATE QUANTITY
// -------------------------
export const updateCartQtyAPI = async (itemId, quantity) => {
  const res = await api.put(`/cart/${itemId}`, {
    quantity,
  });

  return res.data;
};