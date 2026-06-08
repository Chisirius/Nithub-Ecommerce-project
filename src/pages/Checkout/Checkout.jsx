import './checkout.css'
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom';
import {
  MapPin, CreditCard, Package, Lock, Check, X,
  Plus, Phone, Smartphone, Truck, ShieldCheck,
  ArrowLeft, MapPinOff,
} from 'lucide-react';

import AddAddressForm from '../../components/profile/settings/AddAddress';


import {
  createOrderAPI,
  initializePayment,
  verifyPayment,
} from "../../services/paymentServices";

import { useAddress } from '../../hooks/AddressContext'; 
import { CartContext } from '../../hooks/CartContext';
import { OrderContext } from "../../hooks/OrderContext"
import { useAuth } from "../../hooks/AuthContext"
 

// ── Step Indicator ────────────────────────────────────────────────



function StepIndicator({ steps }) {
  return (
    <div className="flex items-center">
      {steps.map((step, i) => (
        <React.Fragment key={step.number}>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step.done
                  ? 'bg-[#2E7D32] text-white'
                  : step.active
                  ? 'bg-[#2E7D32] text-white'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {step.done ? <Check size={13} /> : step.number}
            </div>
            <span
              className={`text-sm font-medium hidden sm:block ${
                step.active || step.done ? 'text-gray-800' : 'text-gray-400'
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`flex-1 h-px mx-3 ${step.done ? 'bg-[#2E7D32]' : 'bg-gray-200'}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ── Empty Address State ───────────────────────────────────────────

function EmptyAddressState({ onAddAddress }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
        <MapPinOff size={28} className="text-gray-300" />
      </div>
      <p className="text-gray-800 font-semibold text-base mb-1">No delivery address selected</p>
      <p className="text-gray-500 text-sm mb-5">
        Add a shipping address to continue with your order
      </p>
      <button
        onClick={onAddAddress}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#2E7D32] text-white text-sm font-bold rounded-xl hover:bg-[#1B5E20] transition-colors shadow-sm"
      >
        <Plus size={15} />
        Add Shipping Address
      </button>
    </div>
  );
}

// ── Selected Address Card ─────────────────────────────────────────

function SelectedAddressCard({
  address,
  onChangeAddress,
  onAddAddress,
}) {
  return (
    <div className="border-2 border-[#2E7D32]/25 bg-[#F1F8F1] rounded-xl p-4">
      {address.isDefault && (
        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2E7D32] bg-[#2E7D32]/10 px-2.5 py-0.5 rounded-full mb-3">
          <Check size={10} />
          Default Address
        </span>
      )}

      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-[#2E7D32]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <MapPin size={15} className="text-[#2E7D32]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 text-sm">{address.firstName} {address.lastName}</p>
          <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{address.street}</p>
          <p className="text-gray-600 text-sm">
            {address.town}, {address.state} 
          </p>
          <div className="flex items-center gap-1.5 mt-2">
            <Phone size={11} className="text-gray-400" />
            <span className="text-gray-500 text-xs font-medium">{address.phoneNumber}</span>
          </div>
          {address.deliveryNotes && (
            <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-1.5 mt-2.5">
              Note: {address.deliveryNotes}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#2E7D32]/10">
        <button
          onClick={onChangeAddress}
          className="flex-1 text-sm font-bold text-[#2E7D32] border-2 border-[#2E7D32] py-2 rounded-xl hover:bg-[#2E7D32] hover:text-white transition-all duration-150"
        >
          Change Address
        </button>
      </div>
    </div>
  );
}

// ── Address Selector Modal ────────────────────────────────────────

function AddressSelectorModal({
  addresses = [],
  selectedId,
  onSelect,
  onClose,
  onManage,
  onAddNew,
}) {
  const [tempSelected, setTempSelected] = useState(selectedId);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-base font-bold text-gray-900">Select Shipping Address</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X size={15} className="text-gray-500" />
          </button>
        </div>

        {/* Address list */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              onClick={() => setTempSelected(addr.id)}
              className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-150 ${
                tempSelected === addr.id
                  ? 'border-[#2E7D32] bg-[#F1F8F1]'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              {/* Radio dot */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                  tempSelected === addr.id ? 'border-[#2E7D32]' : 'border-gray-300'
                }`}
              >
                {tempSelected === addr.id && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2E7D32]" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-sm text-gray-900">{addr.firstName} {addr.lastName}</span>
                  {addr.isDefault && (
                    <span className="text-xs font-bold text-[#2E7D32] bg-[#2E7D32]/10 px-1.5 py-0.5 rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{addr.street}</p>
                <p className="text-gray-500 text-xs">
                  {addr.city}, {addr.state} 
                </p>
                <p className="text-gray-400 text-xs mt-1.5 flex items-center gap-1">
                  <Phone size={10} />
                  {addr.phoneNumber}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/60 space-y-2 flex-shrink-0">
          <button
            onClick={() => {
              onSelect(tempSelected);
              onClose();
            }}
            className="w-full bg-[#2E7D32] text-white text-sm font-bold py-3 rounded-xl hover:bg-[#1B5E20] transition-colors shadow-sm"
          >
            Confirm Address
          </button>
          <div className="flex gap-2">
            <button
              onClick={onAddNew}
              className="flex-1 flex items-center justify-center gap-1.5 text-sm text-gray-600 border border-gray-200 bg-white py-2.5 rounded-xl hover:border-gray-300 transition-colors"
            >
              <Plus size={13} />
              Add New
            </button>
            <button
              onClick={onManage}
              className="flex-1 text-sm text-gray-600 border border-gray-200 bg-white py-2.5 rounded-xl hover:border-gray-300 transition-colors"
            >
              Manage Addresses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Payment Method Card ───────────────────────────────────────────

function PaymentMethodCard({
  icon,
  label,
  description,
  selected,
  onSelect,
}) {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-150 ${
        selected
          ? 'border-[#2E7D32] bg-[#F1F8F1]'
          : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
          selected ? 'bg-[#2E7D32] text-white' : 'bg-gray-50 text-gray-400'
        }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className={`font-bold text-sm ${selected ? 'text-gray-900' : 'text-gray-600'}`}>
          {label}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{description}</p>
      </div>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
          selected ? 'border-[#2E7D32]' : 'border-gray-200'
        }`}
      >
        {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#2E7D32]" />}
      </div>
    </div>
  );
}

// ── Order Summary Item ────────────────────────────────────────────

function OrderSummaryItem({ item }) {

  const { getItemSubtotal} = useContext(CartContext);
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0 bg-gray-50">
        <img src={item.product.images?.[0]} alt={item.product.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">{item.product.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{item.product.category}</p>
      </div>
      <span className="text-sm font-bold text-gray-900 flex-shrink-0">
      ₦{getItemSubtotal(item)}
      </span>
    </div>
  );
}

// ── Main Checkout Page ────────────────────────────────────────────

function Checkout() {
  const { cart, clearCart, subTotal } = useContext(CartContext);
  const {addresses, selectedCheckoutAddress, setSelectedCheckoutAddress, createAddress
  } = useAddress();
  const { fetchOrders } = useContext(OrderContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  

 

  const [showAddressModal, setShowAddressModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const defaultAddress =
    addresses.find((a) => a.isDefault) || addresses[0] || null;
    
    useEffect(() => {
      if (!selectedCheckoutAddress && addresses.length > 0) {
        const defaultAddr =
          addresses.find((a) => a.isDefault) || addresses[0];
    
        setSelectedCheckoutAddress(defaultAddr);
      }
    }, [
      addresses,
      selectedCheckoutAddress,
      setSelectedCheckoutAddress
    ]);
    const selectedAddress = selectedCheckoutAddress;
  
  
  
  const shipping = cart.length > 0 ? 1500 : 0;
  const tax = subTotal * 0.02;
  const total = subTotal + shipping + tax;

  

  const handleGoToAddressBook = () => {
    setShowAddressModal(false);
    navigate('/addressBook', {
      state: {
        fromCheckout: true,
      },
    });
  };

  const handleAddNewAddress = async (data) => {
    const newAddress = await createAddress(data);

    setSelectedCheckoutAddress(newAddress);
  
    setShowAddAddressModal(false);
    setShowAddressModal(false);
  };

  const steps = [
    { number: 1, label: 'Address', done: !!selectedAddress, active: !selectedAddress },
    { number: 2, label: 'Payment', done: false, active: !!selectedAddress },
    { number: 3, label: 'Review', done: false, active: false },
  ];

  const handleCheckout = async () => {
    try {
      if (!selectedAddress) {
        alert("Select address");
        return;
      }
  
      setLoading(true);
  
      // =========================
      // 1. CASH ON DELIVERY FLOW
      // =========================
      if (paymentMethod === "cod") {
        await verifyPayment({
          shippingAddressId:
            selectedAddress.id,
          paymentMethod: "cod",
        });
      
        await fetchOrders();
        clearCart();
      
        alert("Order placed successfully (Pay on Delivery)");
        navigate("/order");
        return;
      }
      
  
      // =========================
      // 2. PAYSTACK FLOW (CARD + MOBILE)
      // =========================
      const checkoutPayload = {
        shippingAddressId: selectedAddress.id,
        paymentMethod,
      };
      
      localStorage.setItem(
        "pendingCheckout",
        JSON.stringify(checkoutPayload)
      );
      
      const paymentData =
        await initializePayment(
          checkoutPayload
        );
  
      // redirect to paystack
      window.location.href = paymentData.authorization_url;
    } catch (err) {
      console.log(err);
      alert("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    const verifyUserPayment =
      async () => {
  
        const reference =
          searchParams.get(
            "reference"
          );
  
        if (!reference) return;
  
        try {
  
          setLoading(true);
  
        const savedCheckout =
          JSON.parse(
            localStorage.getItem(
              "pendingCheckout"
            )
          );

        await verifyPayment({
          reference,
          shippingAddressId:
            savedCheckout?.shippingAddressId,
          paymentMethod:
            savedCheckout?.paymentMethod,
        });
  
          // refresh orders
          await fetchOrders();
  
          // clear cart locally
          clearCart();
  
          alert(
            "Payment successful"
          );
            

          localStorage.removeItem(
            "pendingCheckout"
          );
          navigate("/order");
  
        } catch (err) {
  
          console.log(err);
  
          alert(
            "Payment verification failed"
          );
  
        } finally {
          setLoading(false);
        }
      };
  
    verifyUserPayment();
  
  }, []);


// const [selectedAddress,
//   setSelectedAddress] =
//   useState(null);
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-4">
          <button
            onClick={() => navigate('/cart')}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline font-medium">Cart</span>
          </button>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-full bg-[#2E7D32] flex items-center justify-center">
              <Package size={13} className="text-white" />
            </div>
            <span className="font-bold text-gray-900 text-base">
              AgroMak <span className="text-[#2E7D32]">Checkout</span>
            </span>
          </div>

          <div className="flex-1 max-w-sm hidden md:block">
            <StepIndicator steps={steps} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-7">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">

          {/* ── LEFT COLUMN ────────────────────────── */}
          <div className="space-y-5">

            {/* Step indicator (mobile) */}
            <div className="md:hidden bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <StepIndicator steps={steps} />
            </div>

            {/* Shipping Address Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                <div className="w-8 h-8 rounded-full bg-[#2E7D32]/10 flex items-center justify-center">
                  <MapPin size={15} className="text-[#2E7D32]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-gray-900">Shipping Address</h2>
                  <p className="text-xs text-gray-400">Where should we deliver your order?</p>
                </div>
              </div>

              <div className="p-5">
                {selectedAddress ? (
                  <SelectedAddressCard
                    address={selectedAddress}
                    onChangeAddress={() => setShowAddressModal(true)}
                    onAddAddress={handleGoToAddressBook}
                  />
                ) : (
                  <EmptyAddressState onAddAddress={handleGoToAddressBook} />
                )}
              </div>
            </div>

            
            {selectedAddress && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-[#2E7D32]/10 flex items-center justify-center">
                    <CreditCard size={15} className="text-[#2E7D32]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-gray-900">Payment Method</h2>
                    <p className="text-xs text-gray-400">Choose how you'd like to pay</p>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <PaymentMethodCard
                    icon={<CreditCard size={17} />}
                    label="Credit / Debit Card"
                    description="Visa, Mastercard, Amex accepted"
                    selected={paymentMethod === 'card'}
                    onSelect={() => setPaymentMethod('card')}
                  />
                  
                  <PaymentMethodCard
                    icon={<Truck size={17} />}
                    label="Cash on Delivery"
                    description="Pay when your order arrives"
                    selected={paymentMethod === 'cod'}
                    onSelect={() => setPaymentMethod('cod')}
                  />

               
                  

                  
                  

                  {paymentMethod === 'cod' && (
                    <div className="pt-4 mt-1 border-t border-gray-50">
                      <div className="flex items-start gap-3 p-3.5 bg-amber-50 border border-amber-100 rounded-xl">
                        <Truck size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-amber-700 leading-relaxed">
                          You will pay <strong>{`₦${total}`}</strong> in cash when your
                          order is delivered. Please have exact change ready.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT COLUMN — sticky order summary ── */}
          <div className="lg:sticky lg:top-20 h-fit">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                  <Package size={15} className="text-gray-500" />
                </div>
                <h2 className="text-sm font-bold text-gray-900">Order Summary</h2>
                <span className="ml-auto text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-bold">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {/* Items */}
              <div className="px-5 py-4 space-y-3.5 border-b border-gray-50">
                {cart.map((item, i) => (
                  <OrderSummaryItem key={`${item.id}-${i}`} item={item} />
                ))}
              </div>

              {/* Price breakdown */}
              <div className="px-5 py-4 space-y-2.5 border-b border-gray-50">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-gray-800">₦{subTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium text-gray-800">₦{shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tax (2%)</span>
                  <span className="font-medium text-gray-800">₦{tax}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="font-bold text-gray-900 text-base">Total</span>
                  <span className="font-bold text-gray-900 text-2xl">₦{total}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 py-5 space-y-3">
              <button
                onClick={handleCheckout}
                disabled={!selectedAddress || loading}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  selectedAddress && !loading
                    ? 'bg-[#2E7D32] text-white hover:bg-[#1B5E20] shadow-lg shadow-[#2E7D32]/20 hover:shadow-xl hover:shadow-[#2E7D32]/25 active:scale-[0.98]'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                  {loading
                  ? "Processing..."
                  : paymentMethod === "cod"
                  ? `Place Order (₦${total})`
                  : `Pay ₦${total}`}
              </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <ShieldCheck size={13} className="text-[#2E7D32]" />
                  <span>256-bit SSL encryption</span>
                </div>

                {/* Trust row */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2.5 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Truck size={12} className="text-gray-300 flex-shrink-0" />
                    <span>Free returns 7 days</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <ShieldCheck size={12} className="text-gray-300 flex-shrink-0" />
                    <span>Buyer protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address Selector Modal */}
      {showAddressModal && (
        <AddressSelectorModal
        addresses={addresses}
        selectedId={selectedCheckoutAddress?.id}
        onSelect={(id) => {
          const selected = addresses.find((a) => a.id === id);
          setSelectedCheckoutAddress(selected);
        }}
        onClose={() => setShowAddressModal(false)}
        onManage={handleGoToAddressBook}
        onAddNew={() => {
          setShowAddressModal(false);
          setShowAddAddressModal(true);
          }}
        />
      )}

      {/* Add Address Modal */}
{showAddAddressModal && (
  <AddAddressForm
    onClose={() => setShowAddAddressModal(false)}
    onSave={handleAddNewAddress}
  />
)}
    </div>
  );
}

export default Checkout;
