import React from 'react';
import { DollarSign, TrendingUp, Clock, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { walletStats, transactions } from '../Data/MockData';
import './Wallet.css';

function WalletPage() {
  return (
    <div className="wallet-page">
      <div className="wallet-header">
        <div>
          <h1 className="page-title">Wallet & Earnings</h1>
          <p className="page-subtitle">Track your earnings and manage payouts</p>
        </div>
        <button className="withdraw-btn">
          <ArrowDownCircle size={18} />
          <span>Withdraw Funds</span>
        </button>
      </div>

      {/* Earnings Stats */}
      <div className="wallet-stats-grid">
        <div className="wallet-stat-card primary">
          <div className="stat-icon">
            <DollarSign size={28} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Earnings</p>
            <p className="stat-value">${walletStats.totalEarnings.toLocaleString()}</p>
            <p className="stat-growth">
              <TrendingUp size={14} />
              +{walletStats.earningsGrowth}% this month
            </p>
          </div>
        </div>

        <div className="wallet-stat-card">
          <div className="stat-icon green">
            <ArrowDownCircle size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Available Balance</p>
            <p className="stat-value">${walletStats.availableBalance.toLocaleString()}</p>
          </div>
        </div>

        <div className="wallet-stat-card">
          <div className="stat-icon orange">
            <Clock size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Pending Payouts</p>
            <p className="stat-value">${walletStats.pendingPayouts.toLocaleString()}</p>
          </div>
        </div>

        <div className="wallet-stat-card">
          <div className="stat-icon blue">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-label">This Month</p>
            <p className="stat-value">${walletStats.thisMonthEarnings.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="earnings-chart-card">
        <div className="card-header">
          <h3 className="card-title">Earnings Overview</h3>
          <div className="chart-period-tabs">
            <button className="period-tab active">7 Days</button>
            <button className="period-tab">30 Days</button>
            <button className="period-tab">90 Days</button>
          </div>
        </div>
        <div className="earnings-chart-placeholder">
          <div className="chart-info">
            <div className="chart-metric">
              <span className="metric-label">Total Revenue</span>
              <span className="metric-value">$12,450</span>
            </div>
            <div className="chart-bar-visual"></div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="transactions-card">
        <div className="card-header">
          <h3 className="card-title">Recent Transactions</h3>
          <button className="view-all-link">View All</button>
        </div>
        <div className="transactions-list">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon">
                {transaction.type === 'sale' ? (
                  <ArrowUpCircle size={20} className="icon-green" />
                ) : transaction.type === 'withdrawal' ? (
                  <ArrowDownCircle size={20} className="icon-blue" />
                ) : (
                  <ArrowDownCircle size={20} className="icon-red" />
                )}
              </div>
              <div className="transaction-details">
                <p className="transaction-desc">{transaction.description}</p>
                <p className="transaction-date">{transaction.date}</p>
              </div>
              <div className="transaction-amount">
                <p className={`amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </p>
                <span className={`transaction-status status-${transaction.status}`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Settings */}
      <div className="payout-settings-card">
        <div className="card-header">
          <h3 className="card-title">Payout Method</h3>
          <button className="edit-link">Edit</button>
        </div>
        <div className="payout-method">
          <div className="bank-info">
            <div className="bank-icon">🏦</div>
            <div>
              <p className="bank-name">Bank of America</p>
              <p className="account-number">Account ending in ••••4892</p>
            </div>
          </div>
          <div className="payout-schedule">
            <p className="schedule-label">Payout Schedule</p>
            <p className="schedule-value">Weekly (Every Friday)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletPage;
