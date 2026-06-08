import api from "./api";

// -------------------------
// GET PROFILE
// -------------------------
export const getProfile = async () => {
  const res = await api.get("/users/profile");
  return res.data;
};

// -------------------------
// BECOME SELLER
// -------------------------
export const becomeSeller = async () => {
  const res = await api.patch(
    "/users/become-seller"
  );

  return res.data;
};