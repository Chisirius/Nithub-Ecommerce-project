import React, {useState} from "react";
import {MapPin, Save, X} from "lucide-react";
import "./AddAddressForm.css";

function AddAddressForm({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    town: "",
    state: "",
    phoneNumber: "",
    additionalPhone: "",
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData); // send to parent/context
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="address-modal" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="modal-header">
          <h2>
            <MapPin size={18} /> Add New Address
          </h2>

          <button onClick={onClose} className="close-btn">
            <X size={20} />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="address-form">

          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <input
            name="street"
            placeholder="Street Address"
            value={formData.street}
            onChange={handleChange}
            required
          />

          <div className="row">
            <input
              name="town"
              placeholder="Town"
              value={formData.town}
              onChange={handleChange}
              required
            />
            <input
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <input
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            name="additionalPhone"
            placeholder="Additional Phone Number"
            value={formData.additionalPhone?.trim()
                ? formData.additionalPhone
                : null}
            onChange={handleChange}
            
          />

          <label className="checkbox">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
            />
            Set as default address
          </label>

          <div className="actions">
            <button type="button" onClick={onClose} className="cancel">
              Cancel
            </button>

            <button type="submit" className="save">
              <Save size={16} />
              Save Address
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddAddressForm;