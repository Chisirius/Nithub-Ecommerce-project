import React from 'react';
import {  TrendingUp, TrendingDown } from 'lucide-react';
import './StatCard.css';



function StatCard({ title, value, icon: Icon, trend, trendLabel, color = 'green' }) {
  const isPositiveTrend = trend && trend > 0;
  const isNegativeTrend = trend && trend < 0;

  return (
    <div className={`stat-card stat-card-${color}`}>
      <div className="stat-card-header">
        <div className="stat-card-title">{title}</div>
        <div className={`stat-card-icon stat-icon-${color}`}>
          <Icon size={24} />
        </div>
      </div>

      <div className="stat-card-value">{value}</div>

      {trend !== undefined && (
        <div className="stat-card-footer">
          <div className={`stat-trend ${isPositiveTrend ? 'positive' : isNegativeTrend ? 'negative' : ''}`}>
            {isPositiveTrend && <TrendingUp size={16} />}
            {isNegativeTrend && <TrendingDown size={16} />}
            <span>{Math.abs(trend)}%</span>
          </div>
          <span className="stat-trend-label">{trendLabel || 'vs last month'}</span>
        </div>
      )}
    </div>
  );
}

export default StatCard;
