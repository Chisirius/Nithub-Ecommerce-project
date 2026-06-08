import React from 'react';
import {
  DollarSign,
  ShoppingBag,
  Package,
  Truck,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import StatCard from '../Stat/StatCard';
import { dashboardStats, salesChartData, recentOrders } from '../Data/MockData';
import './Dashboard.css';

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      {/* Welcome Hero Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome back, Green Farm Co. 👋</h1>
          <p className="welcome-subtitle">
            Here's what's happening with your store today
          </p>
        </div>
        <div className="welcome-illustration">
          <div className="illustration-circle">
            <span className="illustration-emoji">🌾</span>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="stats-grid">
        <StatCard
          title="Total Revenue"
          value={`$${dashboardStats.totalRevenue.toLocaleString()}`}
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

      {/* Sales Chart Section */}
      <div className="dashboard-row">
        <div className="chart-card sales-chart">
          <div className="card-header">
            <div>
              <h3 className="card-title">Sales Analytics</h3>
              <p className="card-subtitle">Revenue overview for the last 7 days</p>
            </div>
            <div className="chart-tabs">
              <button className="chart-tab active">Week</button>
              <button className="chart-tab">Month</button>
              <button className="chart-tab">Year</button>
            </div>
          </div>
          <div className="chart-container">
            <div className="simple-line-chart">
              {salesChartData.map((data, index) => (
                <div key={index} className="chart-bar">
                  <div
                    className="bar-fill"
                    style={{ height: `${(data.revenue / 8000) * 100}%` }}
                  ></div>
                  <span className="bar-label">
                    {new Date(data.date).toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="insight-card">
          <div className="card-header">
            <h3 className="card-title">Monthly Insights</h3>
          </div>
          <div className="insight-content">
            <div className="insight-stat">
              <div className="insight-icon green">
                <TrendingUp size={24} />
              </div>
              <div className="insight-details">
                <p className="insight-label">Monthly Sales</p>
                <p className="insight-value">${dashboardStats.monthlySales.toLocaleString()}</p>
              </div>
            </div>
            <div className="insight-stat">
              <div className="insight-icon blue">
                <ArrowUpRight size={24} />
              </div>
              <div className="insight-details">
                <p className="insight-label">Conversion Rate</p>
                <p className="insight-value">{dashboardStats.conversionRate}%</p>
              </div>
            </div>
            <div className="insight-divider"></div>
            <div className="insight-message">
              <p className="insight-text">
                🎉 <strong>Great work!</strong> Your sales are up {dashboardStats.revenueGrowth}% this month.
                Keep up the momentum!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="recent-orders-card">
        <div className="card-header">
          <h3 className="card-title">Recent Orders</h3>
          <button className="view-all-btn">View All</button>
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
              {recentOrders.slice(0, 5).map((order) => (
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
                    <span className="amount">${order.amount.toFixed(2)}</span>
                  </td>
                  <td>
                    <span className="date">{order.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
