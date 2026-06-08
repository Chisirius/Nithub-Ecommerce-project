import api from "./api";

/// =========================
// INITIATE CHECKOUT
// =========================
export const initializePayment = async (checkoutData) => {
    const res = await api.post("/orders/checkout", checkoutData);
    return res.data;
  };
  
  // =========================
  // VERIFY PAYMENT
  // =========================
  export const verifyPayment = async (payload) => {
    const res = await api.post(
      "/orders/verify",
      payload
    );
  
    return res.data;
  };

  export const createOrderAPI = async (data) => {
    const res = await api.post("/orders/verify", data);
    return res.data;
  };