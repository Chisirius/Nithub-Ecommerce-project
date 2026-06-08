import React, {
  useEffect,
  useState,
} from 'react';

import {
  DollarSign,
  ShoppingBag,
  Package,
  Truck,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';

import StatCard from '../Stat/StatCard';

import {
  getSellerDashboard,
} from '../../../services/orderService';

import './Dashboard.css';

function DashboardOverview() {

  // =========================
  // STATE
  // =========================
  const [
    dashboardData,
    setDashboardData,
  ] = useState(null);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // FETCH DASHBOARD
  // =========================
  useEffect(() => {

    const fetchDashboard =
      async () => {

        try {

          const data =
            await getSellerDashboard();

          console.log(
            "SELLER DASHBOARD:",
            data
          );

          setDashboardData(data);

        } catch (error) {

          console.log(
            "Dashboard fetch failed",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchDashboard();

  }, []);

  // =========================
  // LOADING
  // =========================
  if (
    loading ||
    !dashboardData
  ) {

    return (
      <div className="dashboard-overview">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  // =========================
  // EXTRACT DATA
  // =========================
  const {
    dashboardStats,
    salesChartData,
    recentOrders,
  } = dashboardData;

  return (

    <div className="dashboard-overview">

      {/* ========================= */}
      {/* WELCOME HERO */}
      {/* ========================= */}
      <div className="welcome-section">

        <div className="welcome-content">

          <h1 className="welcome-title">
            Welcome back 👋
          </h1>

          <p className="welcome-subtitle">
            Here's what's happening
            with your store today
          </p>

        </div>

        <div className="welcome-illustration">

          <div className="illustration-circle">

            <span className="illustration-emoji">
              🌾
            </span>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* STATS GRID */}
      {/* ========================= */}
      <div className="stats-grid">

        <StatCard
          title="Total Revenue"
          value={`₦${dashboardStats.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          trend={dashboardStats.revenueGrowth}
          color="green"
        />

        <StatCard
          title="Total Orders"
          value={dashboardStats.totalOrders}
          icon={ShoppingBag}
          trend={dashboardStats.ordersGrowth}
          color="blue"
        />

        <StatCard
          title="Active Products"
          value={dashboardStats.activeProducts}
          icon={Package}
          trend={dashboardStats.productsGrowth}
          color="purple"
        />

        <StatCard
          title="Pending Deliveries"
          value={dashboardStats.pendingDeliveries}
          icon={Truck}
          color="orange"
        />

      </div>

      {/* ========================= */}
      {/* DASHBOARD ROW */}
      {/* ========================= */}
      <div className="dashboard-row">

        {/* ========================= */}
        {/* SALES CHART */}
        {/* ========================= */}
        <div className="chart-card sales-chart">

          <div className="card-header">

            <div>

              <h3 className="card-title">
                Sales Analytics
              </h3>

              <p className="card-subtitle">
                Revenue overview for
                recent sales
              </p>

            </div>

            <div className="chart-tabs">

              <button className="chart-tab active">
                Week
              </button>

              <button className="chart-tab">
                Month
              </button>

              <button className="chart-tab">
                Year
              </button>

            </div>

          </div>

          {/* CHART */}
          <div className="chart-container">

            <div className="simple-line-chart">

              {salesChartData.length > 0 ? (

                salesChartData.map(
                  (data, index) => (

                    <div
                      key={index}
                      className="chart-bar"
                    >

                      <div
                        className="bar-fill"
                        style={{
                          height: `${
                            (
                              data.revenue /
                              Math.max(
                                ...salesChartData.map(
                                  (
                                    item
                                  ) =>
                                    item.revenue
                                )
                              )
                            ) * 100
                          }%`,
                        }}
                      ></div>

                      <span className="bar-label">

                        {
                          new Date(
                            data.date
                          ).toLocaleDateString(
                            'en-US',
                            {
                              weekday:
                                'short',
                            }
                          )
                        }

                      </span>

                    </div>
                  )
                )

              ) : (

                <p>
                  No sales data
                  available
                </p>
              )}

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* INSIGHTS */}
        {/* ========================= */}
        <div className="insight-card">

          <div className="card-header">

            <h3 className="card-title">
              Monthly Insights
            </h3>

          </div>

          <div className="insight-content">

            {/* SALES */}
            <div className="insight-stat">

              <div className="insight-icon green">

                <TrendingUp size={24} />

              </div>

              <div className="insight-details">

                <p className="insight-label">
                  Monthly Sales
                </p>

                <p className="insight-value">

                  ₦
                  {dashboardStats.monthlySales.toLocaleString()}

                </p>

              </div>

            </div>

            {/* CONVERSION */}
            {/* <div className="insight-stat">

              <div className="insight-icon blue">

                <ArrowUpRight size={24} />

              </div>

              <div className="insight-details">

                <p className="insight-label">
                  Conversion Rate
                </p>

                <p className="insight-value">

                  {dashboardStats.conversionRate}%

                </p>

              </div>

            </div> */}

            <div className="insight-divider"></div>

            {/* MESSAGE */}
            <div className="insight-message">

              <p className="insight-text">

                🎉
                {" "}
                <strong>
                  Great work!
                </strong>

                {" "}
                Your sales are up
                {" "}
                {dashboardStats.revenueGrowth}%
                {" "}
                this month.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* RECENT ORDERS */}
      {/* ========================= */}
      <div className="recent-orders-card">

        <div className="card-header">

          <h3 className="card-title">
            Recent Orders
          </h3>

          <button className="view-all-btn">
            View All
          </button>

        </div>

        <div className="orders-table">

          <table>

            <thead>

              <tr>

                <th>Order ID</th>

                <th>Customer</th>

                <th>Product</th>

                <th>Status</th>

                <th>Amount</th>

                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              {recentOrders.length > 0 ? (

                recentOrders.map(
                  (order) => (

                    <tr key={order.id}>

                      {/* ORDER ID */}
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

                              {order.buyerName}

                            </div>

                            <div className="customer-email">

                              {order.buyerEmail}

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
                            status-${order.deliveryStatus.toLowerCase()}
                          `}
                        >

                          {
                            order.deliveryStatus
                          }

                        </span>

                      </td>

                      {/* AMOUNT */}
                      <td>

                        <span className="amount">

                          ₦
                          {order.amount.toLocaleString()}

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

                    </tr>
                  )
                )

              ) : (

                <tr>

                  <td colSpan="6">

                    No recent orders

                  </td>

                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default DashboardOverview;