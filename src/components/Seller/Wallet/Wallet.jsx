import React, {
  useEffect,
  useState
} from 'react';

import {
  DollarSign,
  TrendingUp,
  Clock,
  ArrowDownCircle,
  ArrowUpCircle,
} from 'lucide-react';

import {
  getSellerWallet
} from '../../../services/orderService';

import './Wallet.css';

function WalletPage() {

  const [walletData, setWalletData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // FETCH WALLET DATA
  // =========================
  useEffect(() => {

    const fetchWallet =
      async () => {

        try {

          const data =
            await getSellerWallet();

          setWalletData(data);

        } catch (error) {

          console.log(
            "Wallet fetch failed",
            error
          );

        } finally {

          setLoading(false);

        }
      };

    fetchWallet();

  }, []);

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="wallet-page">
        <p>Loading wallet...</p>
      </div>
    );
  }

  const stats =
    walletData?.stats || {};

  const transactions =
    walletData?.transactions || [];

  return (
    <div className="wallet-page">

      {/* HEADER */}
      <div className="wallet-header">

        <div>
          <h1 className="page-title">
            Wallet & Earnings
          </h1>

          <p className="page-subtitle">
            Track your earnings and manage payouts
          </p>
        </div>

        <button className="withdraw-btn">
          <ArrowDownCircle size={18} />
          <span>
            Withdraw Funds
          </span>
        </button>

      </div>

      {/* STATS */}
      <div className="wallet-stats-grid">

        {/* TOTAL */}
        <div className="wallet-stat-card primary">

          <div className="stat-icon">
            <DollarSign size={28} />
          </div>

          <div className="stat-content">

            <p className="stat-label">
              Total Earnings
            </p>

            <p className="stat-value">
              ₦
              {Number(
                stats.totalEarnings || 0
              ).toLocaleString()}
            </p>

            <p className="stat-growth">
              <TrendingUp size={14} />
              +
              {stats.earningsGrowth || 0}
              % this month
            </p>

          </div>
        </div>

        {/* AVAILABLE */}
        <div className="wallet-stat-card">

          <div className="stat-icon green">
            <ArrowDownCircle size={24} />
          </div>

          <div className="stat-content">

            <p className="stat-label">
              Available Balance
            </p>

            <p className="stat-value">
              ₦
              {Number(
                stats.availableBalance || 0
              ).toLocaleString()}
            </p>

          </div>
        </div>

        {/* PENDING */}
        <div className="wallet-stat-card">

          <div className="stat-icon orange">
            <Clock size={24} />
          </div>

          <div className="stat-content">

            <p className="stat-label">
              Pending Payouts
            </p>

            <p className="stat-value">
              ₦
              {Number(
                stats.pendingPayouts || 0
              ).toLocaleString()}
            </p>

          </div>
        </div>

        {/* THIS MONTH */}
        <div className="wallet-stat-card">

          <div className="stat-icon blue">
            <TrendingUp size={24} />
          </div>

          <div className="stat-content">

            <p className="stat-label">
              This Month
            </p>

            <p className="stat-value">
              ₦
              {Number(
                stats.thisMonthEarnings || 0
              ).toLocaleString()}
            </p>

          </div>
        </div>

      </div>

      {/* CHART */}
      <div className="earnings-chart-card">

        <div className="card-header">

          <h3 className="card-title">
            Earnings Overview
          </h3>

          <div className="chart-period-tabs">

            <button className="period-tab active">
              30 Days
            </button>

          </div>
        </div>

        <div className="earnings-chart-placeholder">

          <div className="chart-info">

            <div className="chart-metric">

              <span className="metric-label">
                Total Revenue
              </span>

              <span className="metric-value">
                ₦
                {Number(
                  stats.totalEarnings || 0
                ).toLocaleString()}
              </span>

            </div>

            <div className="chart-bar-visual"></div>

          </div>
        </div>
      </div>

      {/* TRANSACTIONS */}
      <div className="transactions-card">

        <div className="card-header">

          <h3 className="card-title">
            Recent Transactions
          </h3>

          <button className="view-all-link">
            View All
          </button>

        </div>

        <div className="transactions-list">

          {transactions.length > 0 ? (

            transactions.map(
              (transaction) => (

                <div
                  key={transaction.id}
                  className="transaction-item"
                >

                  <div className="transaction-icon">

                    <ArrowUpCircle
                      size={20}
                      className="icon-green"
                    />

                  </div>

                  <div className="transaction-details">

                    <p className="transaction-desc">
                      {transaction.description}
                    </p>

                    <p className="transaction-date">
                      {new Date(
                        transaction.date
                      ).toLocaleDateString()}
                    </p>

                  </div>

                  <div className="transaction-amount">

                    <p className="amount positive">

                      +
                      ₦
                      {Number(
                        transaction.amount
                      ).toLocaleString()}

                    </p>

                    <span
                      className={`transaction-status status-${transaction.status}`}
                    >
                      {transaction.status}
                    </span>

                  </div>

                </div>
              )
            )

          ) : (

            <p>
              No transactions yet
            </p>

          )}

        </div>
      </div>

      {/* PAYOUT SETTINGS */}
      <div className="payout-settings-card">

        <div className="card-header">

          <h3 className="card-title">
            Payout Method
          </h3>

          <button className="edit-link">
            Edit
          </button>

        </div>

        <div className="payout-method">

          <div className="bank-info">

            <div className="bank-icon">
              🏦
            </div>

            <div>

              <p className="bank-name">
                Add Bank Account
              </p>

              <p className="account-number">
                Configure payout details
              </p>

            </div>
          </div>

          <div className="payout-schedule">

            <p className="schedule-label">
              Payout Schedule
            </p>

            <p className="schedule-value">
              Weekly
            </p>

          </div>
        </div>
      </div>

    </div>
  );
}

export default WalletPage;