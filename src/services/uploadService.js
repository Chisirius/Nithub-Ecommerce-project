import api from "./api";

// =========================
// UPLOAD IMAGE
// =========================
export const uploadImage = async (
  file
) => {

  const formData = new FormData();

  formData.append("images", file);

  const res = await api.post(
    "/upload",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return res.data;
};