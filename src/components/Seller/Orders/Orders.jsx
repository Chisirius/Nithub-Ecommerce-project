import React, { useState } from 'react';
import { Search, Filter, Eye, Download } from 'lucide-react';
import { recentOrders } from '../Data/MockData';
import './Orders.css';

function OrdersManagement() {
  const [filter, setFilter] = useState('all');

  const filteredOrders = recentOrders.filter((order) => {
    if (filter === 'all') return true;
    return order.deliveryStatus === filter;
  });

  return (
    <div className="orders-management">
      <div className="orders-header">
        <div>
          <h1 className="page-title">Orders</h1>
          <p className="page-subtitle">Manage and track all your orders</p>
        </div>
        <button className="export-btn">
          <Download size={18} />
          <span>Export</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="orders-stats-grid">
        <div className="order-stat-card">
          <div className="stat-number">45</div>
          <div className="stat-label">Total Orders</div>
        </div>
        <div className="order-stat-card">
          <div className="stat-number">12</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="order-stat-card">
          <div className="stat-number">28</div>
          <div className="stat-label">Shipped</div>
        </div>
        <div className="order-stat-card">
          <div className="stat-number">3</div>
          <div className="stat-label">Cancelled</div>
        </div>
      </div>

      {/* Filters */}
      <div className="orders-controls">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search orders..."
            className="search-input"
          />
        </div>

        <div className="filter-tabs">
          <button
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-tab ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button
            className={`filter-tab ${filter === 'shipped' ? 'active' : ''}`}
            onClick={() => setFilter('shipped')}
          >
            Shipped
          </button>
          <button
            className={`filter-tab ${filter === 'delivered' ? 'active' : ''}`}
            onClick={() => setFilter('delivered')}
          >
            Delivered
          </button>
          <button
            className={`filter-tab ${filter === 'cancelled' ? 'active' : ''}`}
            onClick={() => setFilter('cancelled')}
          >
            Cancelled
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Delivery Status</th>
              <th>Payment</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <span className="order-id">{order.id}</span>
                </td>
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">
                      {order.buyerName.charAt(0)}
                    </div>
                    <div>
                      <div className="customer-name">{order.buyerName}</div>
                      <div className="customer-email">{order.buyerEmail}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="product-cell">
                    <img src={order.productImage} alt={order.product} />
                    <span>{order.product}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge status-${order.deliveryStatus}`}>
                    {order.deliveryStatus}
                  </span>
                </td>
                <td>
                  <span className={`payment-badge payment-${order.paymentStatus}`}>
                    {order.paymentStatus}
                  </span>
                </td>
                <td>
                  <span className="amount">${order.amount.toFixed(2)}</span>
                </td>
                <td>
                  <span className="date">{order.date}</span>
                </td>
                <td>
                  <button className="action-btn">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersManagement;
