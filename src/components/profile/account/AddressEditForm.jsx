import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import './AddressEditForm.css';
import { useAddress } from '../../../hooks/AddressContext';



function AddressEditForm({ onClose, currentAddress }) {
  const [formData, setFormData] =
  useState({

    firstName:
      currentAddress.firstName || '',

    lastName:
      currentAddress.lastName || '',

    phoneNumber:
      currentAddress.phoneNumber || '',

    additionalPhone:
      currentAddress.additionalPhone || '',

    street:
      currentAddress.street || '',

    town:
      currentAddress.town || '',

    state:
      currentAddress.state || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      await editAddress(
        currentAddress.id,
        formData
      );

      onClose();

    } catch (error) {

      console.log(
        "Failed to update address",
        error
      );
    }
  };

  const { editAddress } =
  useAddress();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="address-form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Edit Address</h2>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form className="address-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number*</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Additional Phone Number</label>
            <input
              type="tel"
              name="additionalPhone"
              value={formData.additionalPhone}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Optional"
            />
          </div>

          <div className="form-group">
            <label className="form-label">street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              className="form-input"
              placeholder="E.g., Near Central Park"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Town*</label>
              <input
                type="text"
                name="town"
                value={formData.town}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">State*</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              <Save size={18} />
              <span>Save Address</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressEditForm;
