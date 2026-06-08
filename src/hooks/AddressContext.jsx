import {createContext, useContext, useEffect, useState} from "react";
import {addAddress, deleteAddress, getAddresses, setDefaultAddress, updateAddress,} from "../services/addressServices";

const AddressContext = createContext();

export const useAddress = () => useContext(AddressContext);

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCheckoutAddress, setSelectedCheckoutAddress] = useState(null);
const [showCheckoutAddressModal, setShowCheckoutAddressModal] = useState(false);

  // -----------------------
  // FETCH ADDRESSES
  // -----------------------
  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const data = await getAddresses();
      setAddresses(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------
  // ADD ADDRESS
  // -----------------------
  const createAddress = async (data) => {
    const newAddress = await addAddress(data);
  
    setAddresses((prev) => {
      if (prev.some((a) => a.id === newAddress.id)) return prev;
  
      return [newAddress, ...prev];
    });
  
    return newAddress;
  };

  // -----------------------
  // UPDATE ADDRESS
  // -----------------------
  const editAddress = async (id, data) => {
    const updated = await updateAddress(id, data);

    setAddresses((prev) =>
  prev.map((addr) => {

    if (addr.id === id) {
      return {
        ...addr,
        ...updated,
      };
    }

    return addr;
  })
);
  };

  // -----------------------
  // DELETE ADDRESS
  // -----------------------
  const removeAddress = async (id) => {
    await deleteAddress(id);

    setAddresses((prev) =>
      prev.filter((addr) => addr.id !== id)
    );
  };

  // -----------------------
  // SET DEFAULT
  // -----------------------
  const makeDefault = async (id) => {
    await setDefaultAddress(id);

    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <AddressContext.Provider
      value={{
        addresses,
        loading,
        fetchAddresses,
        createAddress,
        editAddress,
        removeAddress,
        makeDefault,

        selectedCheckoutAddress,
setSelectedCheckoutAddress,
showCheckoutAddressModal,
setShowCheckoutAddressModal,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};