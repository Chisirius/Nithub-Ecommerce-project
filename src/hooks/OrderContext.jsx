import {createContext, useEffect, useState,} from "react";

import {getOrdersAPI,} from "../services/orderService";
import { useAuth } from "./AuthContext";



export const OrderContext =
    createContext();
  
  export const OrderProvider = ({
    children,
  }) => {
    const { token } = useAuth();
  
    const [orders, setOrders] = useState([]);
  
    const fetchOrders =
      async () => {
        try {

          const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token yet, skipping fetchOrders");
        return;
      }

          const data = await getOrdersAPI();
  
          setOrders(data);
  
        } catch (err) {
          console.log(err);
        }
      };
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        fetchOrders();
      }
    }, [token]);
  
    return (
      <OrderContext.Provider
        value={{
          orders,
          setOrders,
          fetchOrders,
        }}
      >
        {children}
      </OrderContext.Provider>
    );
  };

  