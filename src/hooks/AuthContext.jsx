import { createContext, useContext, useEffect, useState } from "react";
import { LoginUser, RegisterUser } from "../services/authService";
import { getProfile } from "../services/userServices";

export const AuthContext = createContext({
  user: null,
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  register: () => {},
  authLoading: true,
});

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );
  const [authLoading, setAuthLoading] = useState(true);

  const isLoggedIn = !!token;

  // -------------------------
  // LOAD USER (ONLY SOURCE OF TRUTH)
  // -------------------------
  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setUser(null);
        setAuthLoading(false);
        return;
      }

      try {
        const userData = await getProfile();
        setUser(userData);
      } catch (error) {
        console.log("Auth error:", error);
        logout(); // token invalid → force logout
      } finally {
        setAuthLoading(false);
      }
    };

    loadUser();
  }, [token]);

  // -------------------------
  // LOGIN
  // -------------------------
  const login = async (formData) => {
    try {
      const data = await LoginUser(formData);

      if (!data?.token) {
        throw new Error("No token returned from server");
      }

      localStorage.setItem("token", data.token);
      setToken(data.token);

      // ❌ DO NOT call getProfile here anymore
      // useEffect will handle it automatically

      return data;
    } catch (error) {
      throw error;
    }
  };

  // -------------------------
  // REGISTER
  // -------------------------
  const register = async (formData) => {
    try {
      const data = await RegisterUser(formData);
      return data;
    } catch (error) {
      throw error;
    }
  };

  // -------------------------
  // LOGOUT
  // -------------------------
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn,
        login,
        register,
        logout,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;