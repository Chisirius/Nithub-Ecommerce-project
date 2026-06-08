import React, { useState } from 'react';
import { Upload, X, Plus, Save } from 'lucide-react';
import './AddProduct.css';
import { categories } from './productCategory';
import api from '../../../services/api';
import { createProduct } from '../../../services/productService';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    oldPrice: '',
    stock: '',
    tags: '',
    shippingInfo: '',
    hasDiscount: false,
  });

  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [imageFiles, setImageFiles] = useState([]);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
  
    if (files.length) {
      setImageFiles((prev) => [...prev, ...files]);
  
      const previews = files.map(file =>
        URL.createObjectURL(file)
      );
  
      setUploadedImages(prev => [...prev, ...previews]);
    }
  };

  const removeImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
      setError("");
      setSuccess("");
  
      
      // upload image first (if using upload endpoint)
      let imageUrls = [];

      if (imageFiles.length > 0) {
        const form = new FormData();

        imageFiles.forEach((file) => {
          form.append("images", file);
        });

        const res = await api.post("/upload", form);

        imageUrls = res.data.imageUrls;
        console.log("IMAGE FILES:", imageFiles);
       console.log("IMAGE URLS:", imageUrls); 
      }
  
      // create product
      await createProduct({
        name: formData.name,
        description: formData.description,
        price: Number(formData.price),
        oldPrice: Number(formData.oldPrice),
        stock: Number(formData.stock),
        category: formData.category,
        images: imageUrls
      });
  
      setSuccess("Product created successfully!");
  
      // reset
      setFormData({
        name: "",
        category: "",
        description: "",
        price: "",
        oldPrice: "",
        stock: "",
        tags: "",
        shippingInfo: "",
        hasDiscount: false,
      });
  
      setUploadedImages([]);
      setImageFiles([]);
  
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Failed to create product");
      console.error("Server Error Details:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };




  return (
    <div className="add-product-page">
      <div className="add-product-header">
        <div>
          <h1 className="page-title">Add New Product</h1>
          <p className="page-subtitle">Create a new product listing for your store</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-grid">
          {/* Left Column */}
          <div className="form-column">
            {/* Basic Information */}
            <div className="form-section">
              <h3 className="section-title">Basic Information</h3>
              <div className="form-group">
                <label className="form-label">Product Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., Organic Tomatoes (1kg)"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category*</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(item => (
                 <option value={item.value} key={item.value}>{item.category}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Description*</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Describe your product in detail..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="organic, fresh, local (comma separated)"
                />
              </div>
            </div>

            {/* Pricing */}
            <div className="form-section">
              <h3 className="section-title">Pricing</h3>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Price*</label>
                  <div className="input-with-prefix">
                    <span className="input-prefix">₦</span>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="form-input with-prefix"
                      placeholder="0.00"
                      step="0.01"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Old Price</label>
                  <div className="input-with-prefix">
                    <span className="input-prefix">₦</span>
                    <input
                      type="number"
                      name="oldPrice"
                      value={formData.oldPrice}
                      onChange={handleInputChange}
                      className="form-input with-prefix"
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="hasDiscount"
                    checked={formData.hasDiscount}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
                  />
                  <span>This product is on discount</span>
                </label>
              </div>
            </div>

            {/* Inventory */}
            <div className="form-section">
              <h3 className="section-title">Inventory</h3>
              <div className="form-group">
                <label className="form-label">Stock Quantity*</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Shipping Information</label>
                <textarea
                  name="shippingInfo"
                  value={formData.shippingInfo}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Delivery time, shipping cost, etc."
                  rows={3}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-column">
            {/* Product Images */}
            <div className="form-section">
              <h3 className="section-title">Product Images</h3>
              <div className="image-upload-area">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="image-upload-input"
                />
                <label htmlFor="image-upload" className="image-upload-label">
                  <div className="upload-icon">
                    <Upload size={32} />
                  </div>
                  <p className="upload-title">Drag & drop or click to upload</p>
                  <p className="upload-subtitle">PNG, JPG, WebP up to 10MB</p>
                </label>
              </div>

              {uploadedImages.length > 0 && (
                <div className="uploaded-images-grid">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="uploaded-image-item">
                      <img src={image} alt={`Upload ${index + 1}`} />
                      <button
                        type="button"
                        className="remove-image-btn"
                        onClick={() => removeImage(index)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  <label htmlFor="image-upload" className="add-more-btn">
                    <Plus size={24} />
                  </label>
                </div>
              )}
            </div>

            {/* Preview Card */}
            <div className="form-section">
              <h3 className="section-title">Preview</h3>
              <div className="product-preview-card">
                {uploadedImages.length > 0 ? (
                  <img src={uploadedImages[0]} alt="Preview" className="preview-image" />
                ) : (
                  <div className="preview-placeholder">
                    <Upload size={48} />
                    <p>No image uploaded</p>
                  </div>
                )}
                <div className="preview-info">
                  <h4 className="preview-name">{formData.name || 'Product Name'}</h4>
                  <p className="preview-category">{formData.category || 'Category'}</p>
                  <div className="preview-price">
                    {formData.price && (
                      <>
                        <span className="preview-price-new">₦{formData.price}</span>
                        {formData.oldPrice && (
                          <span className="preview-price-old">₦{formData.oldPrice}</span>
                        )}
                      </>
                    )}
                  </div>
                  {formData.stock && (
                    <p className="preview-stock">In Stock: {formData.stock}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="button" className="btn btn-secondary">
            Save as Draft
          </button>
          <button type="submit" className="btn btn-primary">
            <Save size={18} />
            <span>Publish Product</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
