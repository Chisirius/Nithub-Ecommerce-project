import React, { useState } from 'react';
import { MapPin, Plus, Edit2, Trash2, CheckCircle } from 'lucide-react';
import './AddressBook.css';
import { useAddress } from '../../hooks/AddressContext';
import AddAddressForm from '../../components/profile/settings/AddAddress';
import { useLocation, useNavigate } from 'react-router-dom';
import AddressEditForm from '../../components/profile/account/AddressEditForm';


function AddressBookPage() {
  const { addresses, createAddress, removeAddress, makeDefault, editAddress } = useAddress();
  const [editingAddress, setEditingAddress] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const location = useLocation();
const navigate = useNavigate();

const fromCheckout = location.state?.fromCheckout;
  return (
    <div className="address-book-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Address Book</h1>
          <p className="page-subtitle">Manage your delivery addresses</p>
        </div>
        <button className="add-address-btn"
        onClick={() => setShowAddModal(true)}>
          <Plus size={18} />
          <span>Add New Address</span>
        </button>
      </div>

      {fromCheckout && (
  <button
    className="back-checkout-btn"
    onClick={() => navigate('/checkout')}
  >
    Back to Checkout
  </button>
)}

      {/* MODAL */}
      {showAddModal && (
        <AddAddressForm
          onClose={() => setShowAddModal(false)}
          onSave={createAddress}
        />
      )}

      <div className="addresses-grid">
        {addresses.map((address) => (
          <div key={address.id} className="address-card">
            
            {address.isDefault && (
              <div className="default-badge">
                <CheckCircle size={14} />
                <span>Default</span>
              </div>
            )}

            <div className="address-header">
              <MapPin size={20} />
              <h3 className="address-name">{address.firstName} {address.lastName}</h3>
            </div>

            <div className="address-details">
              <p className="address-line">{address.street}</p>
              <p className="address-line">
                {address.town}, {address.state} 
              </p>
              <p className="address-phone">{address.phoneNumber}</p>

                {address.additionalPhone && (
                  <p className="address-phone">
                    Alt: {address.additionalPhone}
                  </p>
                )}
              
            </div>

            <div className="address-actions">
              <button className="address-action-btn edit"
              onClick={() => setEditingAddress(address)}>
                <Edit2 size={16} />
                <span>Edit</span>
              </button>

                    {editingAddress && (
                        <AddressEditForm
                          currentAddress={editingAddress}
                          onClose={() => setEditingAddress(null)}
                          onSave={async (data) => {
                            await editAddress(editingAddress.id, data);
                            setEditingAddress(null);
                          }}
                        />
                      )}


              <button className="address-action-btn delete"
              onClick={() => removeAddress(address.id)}
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>

              <button
                className="address-action-btn default"
                onClick={() => makeDefault(address.id)}
              >
                Set Default
              </button>
      </div>
          </div>
        ))}
    </div>


    </div>
  );
}

export default AddressBookPage;
