import React, {useEffect, useState} from 'react';
import {Edit2, Filter, Grid, List, MoreVertical, Search, Trash2} from 'lucide-react';
import {deleteProductAPI, getSellerProducts, updateProductAPI} from '../../../services/productService'
import './ProductManager.css';
import {categories} from './productCategory';
import EditProductModal from './EditProductModal';


function ProductsManagement() {
  const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
const [searchQuery, setSearchQuery] = useState('');
const [selectedCategory, setSelectedCategory] = useState('all')
const [viewMode, setViewMode] = useState('grid');
const [editingProduct, setEditingProduct] = useState(null);
const [showModal, setShowModal] = useState(false);



useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getSellerProducts();

      setProducts(data);

    } catch (err) {
      setError("Failed to load products");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);


const filteredProducts = products.filter((product) => {
  const matchesSearch =
    product.name.toLowerCase().includes(searchQuery.toLowerCase());

  const matchesCategory =
    selectedCategory === 'all' ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

if (loading) {
  return <p className="loading">Loading products...</p>;
}

if (error) {
  return <p className="error">{error}</p>;
}

const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product? This action cannot be undone."
    );
  
    if (!confirmDelete) return; // ❌ user cancelled
  
    try {
      await deleteProductAPI(id);
  
      // remove instantly from UI
      setProducts((prev) => prev.filter((p) => p.id !== id));
  
      alert("Product deleted successfully");
  
    } catch (err) {
      console.log(err);
      alert("Delete failed. Please try again.");
    }
  };

const handleEditClick = (product) => {
  setEditingProduct(product);
  setShowModal(true);
};

const handleUpdate = async (updatedProduct) => {
  try {
    const res = await updateProductAPI(
      updatedProduct.id,
      updatedProduct
    );

    setProducts((prev) =>
      prev.map((product) =>
      product.id === updatedProduct.id
        ? res
        : product
    )
    );

    setShowModal(false);
    setEditingProduct(null);

    alert("Product updated");

  } catch (err) {
    console.log(err);
    alert("Update failed");
  }
};

  return (
    <div className="products-management">


{showModal && editingProduct && (
  <EditProductModal
    product={editingProduct}
    onClose={() => {
      setShowModal(false);
      setEditingProduct(null);
    }}
    onSave={handleUpdate}
  />
)}

      <div className="products-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">Manage your product inventory and listings</p>
        </div>
      </div>

     

      {/* Filters and Controls */}
      <div className="products-controls">
        <div className="search-filter-group">
          <div className="search-box">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <button className="filter-btn">
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(item => (
                 <option value={item.value} key={item.value}>{item.category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="view-toggle">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid size={18} />
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Products Display */}
      {viewMode === 'grid' ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-grid-card">
              <div className="product-image-container">
                <img src={product.images?.[0]} alt={product.name} />
                <span className={`product-status-badge status-${product.status?.replace(' ', '-')}`}>
                  {product.status}
                </span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-stats">
                  <div className="stat-item">
                    <span className="stat-label">Stock:</span>
                    <span className={`stat-value ${product.stock === 0 ? 'danger' : ''}`}>
                      {product.stock}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Sales:</span>
                    <span className="stat-value">{product.sales}</span>
                  </div>
                </div>
                <div className="product-price-row">
                  <span className="product-price">₦{product.price.toFixed(2)}</span>
                  <div className="product-actions">
                    <button className="action-btn edit" onClick={() => handleEditClick(product)}>
                      <Edit2 size={32} />
                    </button>
                    <button className="action-btn delete" onClick={() => handleDelete(product.id)}>
                      <Trash2 size={32} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="products-list">
          <table className="products-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Sales</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="product-cell">
                      <img src={product.images?.[0]} alt={product.name} />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td className="price-cell">₦{product.price}</td>
                  <td>
                    <span className={`stock-value ${product.stock === 0 ? 'danger' : ''}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td>{product.sales}</td>
                  <td>
                    <span className={`status-badge status-${product.status.replace(' ', '-')}`}>
                      {product.status}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      
                      <button className="action-btn delete">
                        <Trash2 size={32} />
                      </button>
                      <button className="action-btn more">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductsManagement;
