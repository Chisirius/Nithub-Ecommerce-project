import api from "./api";

// =========================
// GET ALL PRODUCTS
// =========================
export const getAllProducts = async () => {
  const res = await api.get("/products/explore");
  return res.data;
};
// =========================
// GET SELLER PRODUCTS
// =========================
export const getSellerProducts = async () => {
  const res = await api.get("/products/seller/products");
  return res.data;
};

// =========================
// CREATE PRODUCT
// =========================
export const createProduct = async(data) => {
    const res = await api.post("/products/create", data)
    return res.data
}
// =========================
// UPDATE PRODUCT
// =========================
export const updateProductAPI = async (id, data) => {
    const res = await api.put(`/products/${id}`, data);
    return res.data;
  };
  
  // =========================
  // DELETE PRODUCT (SOFT DELETE)
  // =========================
  export const deleteProductAPI = async (id) => {
    const res = await api.delete(`/products/${id}`);
    return res.data;}