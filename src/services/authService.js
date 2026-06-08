import api from "./api"

// ---------------------
// REGISTER USER
// ---------------------
export const RegisterUser = async(userData) => {
    try {
        const res = await api.post("/auth/register", userData)
        return res.data
    } catch(error){
        console.log(error)
    }
}


// ---------------------
// LOGIN USER
// ---------------------
export const LoginUser = async(userData) => {
    try{
        const res = await api.post("/auth/login", userData)
        return res.data;
    } catch(error){
        console.log(error)
    }
    
}