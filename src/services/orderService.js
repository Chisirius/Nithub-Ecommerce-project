import api from "./api";

// -------------------------
// GET USER ORDERS
// -------------------------
export const getOrders = async () => {
  const res = await api.get("/orders");

  return res.data;
};

// -------------------------
// CHECKOUT
// -------------------------
export const checkoutCart = async () => {
  const res = await api.post(
    "/orders/checkout"
  );

  return res.data;
};


// =========================
// GET ORDERS
// =========================
export const getOrdersAPI =
  async () => {

  const res = await api.get(
    "/orders"
  );

  return res.data;
};

// =========================
// SELLER DASHBOARD
// =========================
export const getSellerDashboard =
  async () => {

    const res =
      await api.get(
        "/orders/seller/dashboard"
      );

    return res.data;
  };

  // =========================
// SELLER ORDERS
// =========================
export const getSellerOrders =
async () => {

  const res =
    await api.get(
      "/orders/seller/orders"
    );

  return res.data;
};

// =========================
// SELLER WALLET
// =========================
export const getSellerWallet =
  async () => {

    const res =
      await api.get(
        "/orders/seller/wallet"
      );

    return res.data;
  };