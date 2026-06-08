import api from "./api";

// GET
export const getAddresses = async () => {
  const res = await api.get("/addresses");
  return res.data;
};

// ADD
export const addAddress = async (data) => {
  const res = await api.post("/addresses", data);
  return res.data;
};

// UPDATE
export const updateAddress = async (id, data) => {
  const res = await api.put(`/addresses/${id}`, data);
  return res.data;
};

// DELETE
export const deleteAddress = async (id) => {
  const res = await api.delete(`/addresses/${id}`);
  return res.data;
};

// DEFAULT
export const setDefaultAddress = async (id) => {
  const res = await api.patch(`/addresses/${id}/default`);
  return res.data;
};