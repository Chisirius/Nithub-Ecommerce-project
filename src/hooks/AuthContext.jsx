import { createContext, useContext, useEffect, useState } from "react";
import { LoginUser, RegisterUser } from "../services/authService";
import { getProfile } from "../services/userServices";


export const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
  })

export function useAuth () {
    return useContext(AuthContext);
  };


  
function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(
        localStorage.getItem("token") || null
      );
      const [authLoading, setAuthLoading] = useState(true);
      
      const isLoggedIn = !!token;
    
    
    useEffect(() => {

        const loadUser = async () => {
          // no token
          if (!token) {
            setAuthLoading(false);
            return;
          }
      
          try {
            const userData = await getProfile();
            setUser(userData);
            
      
          } catch (error) {
            console.log(error);
            logout();
      
          } finally {
            setAuthLoading(false);
          }
        };
      
        loadUser();
      }, [token]);
      
     useEffect(()=> {
        console.log(user)
     }, [user])

// -------------------------
//  LOGIN
// ------------------------

    const login = async(formData) =>{
       try {
        const data = await LoginUser(formData)

        if (!data) {
            throw new Error("No data returned from server");
          }
       
        localStorage.setItem("token", data.token)
        setToken(data.token);

        const profile = await getProfile();
        setUser(profile);

        return data
    } catch (error){
        throw error;
        }
    }

// -------------------------
// REGISTER
// ------------------------

const register = async (formData) => {
    try {
      const data = await RegisterUser(formData);
      return data;
    } catch (error) {
      throw error;
    }
  };



// -------------------------
//  LOGOUT
// ------------------------
        const logout = () =>  {

            setToken(null)
            setUser (null)
            localStorage.removeItem("token")
        }


    return (
        <AuthContext.Provider  value={{user, token, isLoggedIn, login, register, logout, authLoading,}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;