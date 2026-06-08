import React, {useEffect, useState} from 'react';

import {CheckCircle, Package, RotateCcw, Truck, XCircle} from 'lucide-react';

import {getOrders} from '../../services/orderService';

import './OrderPage.css';

function OrdersPage() {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // FETCH ORDERS
  // =========================
  useEffect(() => {

    const fetchOrders =
      async () => {

        try {

          const data =
            await getOrders();

          setOrders(data);

        } catch (error) {

          console.log(
            "Failed to fetch orders",
            error
          );

        } finally {

          setLoading(false);

        }
      };

    fetchOrders();

  }, []);

  // =========================
  // STATUS ICON
  // =========================
  const getStatusIcon =
    (status) => {

      switch (
        status?.toLowerCase()
      ) {

        case 'pending':
          return (
            <Package size={20} />
          );

        case 'paid':
          return (
            <CheckCircle size={20} />
          );

        case 'delivered':
          return (
            <CheckCircle size={20} />
          );

        case 'shipped':
          return (
            <Truck size={20} />
          );

        case 'cancelled':
          return (
            <XCircle size={20} />
          );

        default:
          return (
            <Package size={20} />
          );
      }
    };

  // =========================
  // FORMAT DATE
  // =========================
  const formatDate =
    (date) => {

      return new Date(date)
        .toLocaleDateString(
          "en-NG",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        );
    };

  // =========================
  // LOADING STATE
  // =========================
  if (loading) {

    return (
      <div className="orders-page">
        <p>Loading orders...</p>
      </div>
    );
  }

  return (

    <div className="orders-page">

      {/* HEADER */}
      <div className="page-header">

        <h1 className="page-title">
          My Orders
        </h1>

        <p className="page-subtitle">
          Track and manage your orders
        </p>

      </div>

      {/* ORDERS */}
      <div className="orders-list">

        {orders.length > 0 ? (

          orders.map((order) => (

            <div
              key={order.id}
              className="order-card"
            >

              {/* HEADER */}
              <div className="order-card-header">

                <div className="order-info">

                  <span className="order-id">
                    Order #
                    {order.id.slice(0, 8)}
                  </span>

                  <span className="order-date">
                    {formatDate(
                      order.createdAt
                    )}
                  </span>

                </div>

                <span
                  className={`
                    order-status-badge
                    status-${order.status?.toLowerCase()}
                  `}
                >

                  {getStatusIcon(
                    order.status
                  )}

                  <span>
                    {order.status}
                  </span>

                </span>

              </div>

              {/* BODY */}
              <div className="order-card-body">

                {order.items.map(
                  (item) => (

                    <div
                      key={item.id}
                      className="order-product"
                    >

                      <img
                        src={
                          item.productImage
                        }
                        alt={
                          item.productName
                        }
                      />

                      <div className="product-details">

                        <h3 className="product-name">
                          {item.productName}
                        </h3>

                        <p className="product-quantity">
                          Quantity:
                          {" "}
                          {item.quantity}
                        </p>

                        <p className="product-quantity">
                          ₦
                          {Number(
                            item.price
                          ).toFixed(2)}
                        </p>

                      </div>

                    </div>
                  )
                )}

                {/* TOTAL */}
                <div className="order-price">

                  <span className="price-label">
                    Total
                  </span>

                  <span className="price-value">
                    ₦
                    {Number(
                      order.total
                    ).toFixed(2)}
                  </span>

                </div>

              </div>

              {/* FOOTER */}
              <div className="order-card-footer">

                {order.trackingId && (

                  <span className="tracking-number">

                    Tracking:
                    {" "}
                    {order.trackingId}

                  </span>

                )}

                <div className="order-actions">

                  {order.status ===
                    'DELIVERED' && (

                    <button
                      className="
                        action-btn
                        secondary
                      "
                    >

                      <RotateCcw size={16} />

                      <span>
                        Reorder
                      </span>

                    </button>
                  )}


                </div>

              </div>

            </div>
          ))

        ) : (

          <div className="empty-state">

            <div className="empty-icon">
              <Package size={64} />
            </div>

            <h3 className="empty-title">
              No orders yet
            </h3>

            <p className="empty-description">
              Start shopping and your
              orders will appear here
            </p>

            <button className="empty-cta">
              Start Shopping
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default OrdersPage;