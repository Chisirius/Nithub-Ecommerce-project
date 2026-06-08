import {createContext, useEffect, useState,} from "react";

import {getOrdersAPI,} from "../services/orderService";


export const OrderContext =
    createContext();
  
  export const OrderProvider = ({
    children,
  }) => {
  
    const [orders, setOrders] =
      useState([]);
  
    const fetchOrders =
      async () => {
        try {
          const data =
            await getOrdersAPI();
  
          setOrders(data);
  
        } catch (err) {
          console.log(err);
        }
      };
  
    useEffect(() => {
      fetchOrders();
    }, []);
  
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

  