import React, { useState } from 'react';
import { X, Save, Upload, Image as ImageIcon } from 'lucide-react';
//import { SellerProduct } from '../data/mockData';
import './EditProduct.css';
import { categories } from './productCategory';
import { uploadImage } from '../../../services/uploadService';



function EditProductModal({ product, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    price: product.price.toString(),
    stock: product.stock.toString(),
  });

  const [imagePreview, setImagePreview] = useState( product.images?.[0] || "");
  const [newImage, setNewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {

    const file = e.target.files?.[0];
  
    if (!file) return;
  
    try {
  
      // local preview immediately
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
  
      reader.readAsDataURL(file);
  
      // upload to backend
      const res = await uploadImage(file);
  
      // backend returns:
      // imageUrls: []
  
      if (res.imageUrls?.length > 0) {
        setImagePreview(res.imageUrls[0]);
      }
  
    } catch (error) {
      console.log(error);
      alert("Image upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      images: [imagePreview],
    };

    onSave(updatedProduct);
    onClose();
  };

  return (
    <div className="edit-modal-overlay" onClick={onClose}>
      <div className="edit-product-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="edit-modal-header">
          <h2 className="edit-modal-title">Edit Product</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form className="edit-product-form" onSubmit={handleSubmit}>
          {/* Product Image Section */}
          <div className="form-section">
            <label className="section-label">Product Image</label>
            <div className="image-upload-section">
              <div className="current-image-preview">
                {imagePreview ? (
                  <img src={imagePreview} alt="Product" />
                ) : (
                  <div className="image-placeholder">
                    <ImageIcon size={48} />
                    <p>No image</p>
                  </div>
                )}
              </div>
              <div className="image-upload-actions">
                <input
                  type="file"
                  id="product-image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file-input"
                />
                <label htmlFor="product-image" className="upload-image-btn">
                  <Upload size={18} />
                  <span>Change Image</span>
                </label>
                <p className="upload-hint">PNG, JPG, WebP up to 5MB</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="form-section">
            <label className="section-label">Product Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="edit-form-input"
              placeholder="e.g., Organic Tomatoes"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-section">
              <label className="section-label">Category*</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="edit-form-select"
                required
              >
                {categories.map((item) => (
                <option
                    key={item.value}
                    value={item.value}
                >
                    {item.category}
                </option>
                ))}
              </select>
            </div>

            <div className="form-section">
              <label className="section-label">Price*</label>
              <div className="input-with-prefix">
                <span className="input-prefix">$</span>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="edit-form-input with-prefix"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <label className="section-label">Stock Quantity*</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              className="edit-form-input"
              placeholder="0"
              min="0"
              required
            />
          </div>

          {/* Modal Actions */}
          <div className="edit-modal-actions">
            <button type="button" className="cancel-edit-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-edit-btn">
              <Save size={18} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;
