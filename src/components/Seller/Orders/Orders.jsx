import React, {useEffect, useMemo, useState,} from 'react';

import {Download, Eye, Search,} from 'lucide-react';

import {getSellerOrders,} from '../../../services/orderService';

import './Orders.css';

function OrdersManagement() {

  // =========================
  // STATE
  // =========================
  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [filter, setFilter] =
    useState('all');

  const [search, setSearch] =
    useState('');

  // =========================
  // FETCH ORDERS
  // =========================
  useEffect(() => {

    const fetchOrders =
      async () => {

        try {

          const data =
            await getSellerOrders();

          console.log(
            "SELLER ORDERS:",
            data
          );

          setOrders(data);

        } catch (error) {

          console.log(
            "Failed to fetch seller orders",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchOrders();

  }, []);

  // =========================
  // FILTERED ORDERS
  // =========================
  const filteredOrders =
    useMemo(() => {

      return orders.filter(
        (order) => {

          // STATUS FILTER
          const matchesFilter =
            filter === 'all'
              ? true
              : order.deliveryStatus
                  ?.toLowerCase() ===
                filter;

          // SEARCH FILTER
          const matchesSearch =

            order.id
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            order.buyerName
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            order.product
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              );

          return (
            matchesFilter &&
            matchesSearch
          );
        }
      );

    }, [
      orders,
      filter,
      search,
    ]);

  // =========================
  // STATS
  // =========================
  const totalOrders =
    orders.length;

  const pendingOrders =
    orders.filter(
      (order) =>
        order.deliveryStatus ===
        'PENDING'
    ).length;

  const shippedOrders =
    orders.filter(
      (order) =>
        order.deliveryStatus ===
        'SHIPPED'
    ).length;

  const cancelledOrders =
    orders.filter(
      (order) =>
        order.deliveryStatus ===
        'CANCELLED'
    ).length;

  // =========================
  // LOADING
  // =========================
  if (loading) {

    return (
      <div className="orders-management">
        <p>Loading orders...</p>
      </div>
    );
  }

  return (

    <div className="orders-management">

      {/* HEADER */}
      <div className="orders-header">

        <div>

          <h1 className="page-title">
            Orders
          </h1>

          <p className="page-subtitle">
            Manage and track all your orders
          </p>

        </div>

        <button className="export-btn">

          <Download size={18} />

          <span>
            Export
          </span>

        </button>

      </div>

      {/* STATS */}
      <div className="orders-stats-grid">

        <div className="order-stat-card">

          <div className="stat-number">
            {totalOrders}
          </div>

          <div className="stat-label">
            Total Orders
          </div>

        </div>

        <div className="order-stat-card">

          <div className="stat-number">
            {pendingOrders}
          </div>

          <div className="stat-label">
            Pending
          </div>

        </div>

        <div className="order-stat-card">

          <div className="stat-number">
            {shippedOrders}
          </div>

          <div className="stat-label">
            Shipped
          </div>

        </div>

        <div className="order-stat-card">

          <div className="stat-number">
            {cancelledOrders}
          </div>

          <div className="stat-label">
            Cancelled
          </div>

        </div>

      </div>

      {/* FILTERS */}
      <div className="orders-controls">

        <div className="search-box">

          <Search
            size={20}
            className="search-icon"
          />

          <input
            type="text"
            placeholder="Search orders..."
            className="search-input"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        <div className="filter-tabs">

          <button
            className={`filter-tab ${
              filter === 'all'
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setFilter('all')
            }
          >
            All
          </button>

          <button
            className={`filter-tab ${
              filter === 'pending'
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setFilter('pending')
            }
          >
            Pending
          </button>

          <button
            className={`filter-tab ${
              filter === 'shipped'
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setFilter('shipped')
            }
          >
            Shipped
          </button>

          <button
            className={`filter-tab ${
              filter === 'delivered'
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setFilter('delivered')
            }
          >
            Delivered
          </button>

          <button
            className={`filter-tab ${
              filter === 'cancelled'
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setFilter('cancelled')
            }
          >
            Cancelled
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="orders-table-container">

        <table className="orders-table">

          <thead>

            <tr>

              <th>Order ID</th>

              <th>Customer</th>

              <th>Product</th>

              <th>Status</th>

              <th>Payment</th>

              <th>Amount</th>

              <th>Date</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.length >
            0 ? (

              filteredOrders.map(
                (order) => (

                  <tr key={order.id}>

                    <td>

                      <span className="order-id">

                        #
                        {order.id.slice(
                          0,
                          8
                        )}

                      </span>

                    </td>

                    {/* CUSTOMER */}
                    <td>

                      <div className="customer-cell">

                        <div className="customer-avatar">

                          {
                            order.buyerName?.charAt(
                              0
                            )
                          }

                        </div>

                        <div>

                          <div className="customer-name">

                            {
                              order.buyerName
                            }

                          </div>

                          <div className="customer-email">

                            {
                              order.buyerEmail
                            }

                          </div>

                        </div>

                      </div>

                    </td>

                    {/* PRODUCT */}
                    <td>

                      <div className="product-cell">

                        <img
                          src={
                            order.productImage
                          }
                          alt={
                            order.product
                          }
                        />

                        <span>
                          {order.product}
                        </span>

                      </div>

                    </td>

                    {/* STATUS */}
                    <td>

                      <span
                        className={`
                          status-badge
                          status-${order.deliveryStatus?.toLowerCase()}
                        `}
                      >

                        {
                          order.deliveryStatus
                        }

                      </span>

                    </td>

                    {/* PAYMENT */}
                    <td>

                      <span
                        className={`
                          payment-badge
                          payment-${order.paymentStatus?.toLowerCase()}
                        `}
                      >

                        {
                          order.paymentStatus
                        }

                      </span>

                    </td>

                    {/* AMOUNT */}
                    <td>

                      <span className="amount">

                        ₦
                        {Number(
                          order.amount
                        ).toLocaleString()}

                      </span>

                    </td>

                    {/* DATE */}
                    <td>

                      <span className="date">

                        {
                          new Date(
                            order.date
                          ).toLocaleDateString(
                            "en-NG",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        }

                      </span>

                    </td>

                    {/* ACTION */}
                    <td>

                      <button className="action-btn">

                        <Eye size={16} />

                      </button>

                    </td>

                  </tr>
                )
              )

            ) : (

              <tr>

                <td
                  colSpan="8"
                  style={{
                    textAlign: 'center',
                    padding: '30px',
                  }}
                >

                  No orders found

                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default OrdersManagement;