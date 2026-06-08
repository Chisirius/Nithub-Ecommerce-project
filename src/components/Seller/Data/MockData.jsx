// Mock data for Seller Dashboard

// export interface DashboardStats {
//     totalRevenue: number;
//     totalOrders: number;
//     activeProducts: number;
//     pendingDeliveries: number;
//     monthlySales: number;
//     conversionRate: number;
//     revenueGrowth: number;
//     ordersGrowth: number;
//     productsGrowth: number;
//   }
  
//   export interface SalesData {
//     date: string;
//     revenue: number;
//     orders: number;
//   }
  
//   export interface SellerProduct {
//     id: number;
//     name: string;
//     category: string;
//     image: string;
//     stock: number;
//     price: number;
//     sales: number;
//     status: 'active' | 'out of stock' | 'draft';
//   }
  
//   export interface Order {
//     id: string;
//     buyerName: string;
//     buyerEmail: string;
//     product: string;
//     productImage: string;
//     deliveryStatus: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
//     paymentStatus: 'pending' | 'paid' | 'failed';
//     date: string;
//     amount: number;
//   }
  
//   export interface Transaction {
//     id: string;
//     type: 'sale' | 'withdrawal' | 'refund';
//     description: string;
//     amount: number;
//     date: string;
//     status: 'completed' | 'pending' | 'failed';
//   }
  
  export const dashboardStats = {
    totalRevenue: 45780.50,
    totalOrders: 234,
    activeProducts: 48,
    pendingDeliveries: 12,
    monthlySales: 12450.00,
    conversionRate: 3.2,
    revenueGrowth: 12.5,
    ordersGrowth: 8.3,
    productsGrowth: 15.2,
  };
  
  export const salesChartData = [
    { date: '2024-01-01', revenue: 4200, orders: 28 },
    { date: '2024-01-02', revenue: 3800, orders: 24 },
    { date: '2024-01-03', revenue: 5100, orders: 35 },
    { date: '2024-01-04', revenue: 4600, orders: 31 },
    { date: '2024-01-05', revenue: 6200, orders: 42 },
    { date: '2024-01-06', revenue: 5800, orders: 38 },
    { date: '2024-01-07', revenue: 7100, orders: 48 },
  ];
  
  export const sellerProducts = [
    {
      id: 1,
      name: 'Organic Tomatoes (1kg)',
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=400&h=400&fit=crop',
      stock: 150,
      price: 4.99,
      sales: 342,
      status: 'active'
    },
    {
      id: 2,
      name: 'Fresh Carrots Bundle',
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop',
      stock: 0,
      price: 3.49,
      sales: 218,
      status: 'out of stock'
    },
    {
      id: 3,
      name: 'Premium Rice (5kg)',
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
      stock: 89,
      price: 15.99,
      sales: 156,
      status: 'active'
    },
    {
      id: 4,
      name: 'Farm Fresh Eggs (12pc)',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
      stock: 234,
      price: 5.99,
      sales: 487,
      status: 'active'
    },
    {
      id: 5,
      name: 'Organic Spinach',
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
      stock: 67,
      price: 2.99,
      sales: 145,
      status: 'active'
    },
  ];
  
  export const recentOrders = [
    {
      id: 'ORD-001234',
      buyerName: 'Sarah Johnson',
      buyerEmail: 'sarah.j@email.com',
      product: 'Organic Tomatoes (1kg)',
      productImage: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=100&h=100&fit=crop',
      deliveryStatus: 'shipped',
      paymentStatus: 'paid',
      date: '2024-01-15',
      amount: 4.99
    },
    {
      id: 'ORD-001235',
      buyerName: 'Michael Chen',
      buyerEmail: 'mchen@email.com',
      product: 'Premium Rice (5kg)',
      productImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop',
      deliveryStatus: 'pending',
      paymentStatus: 'paid',
      date: '2024-01-15',
      amount: 15.99
    },
    {
      id: 'ORD-001236',
      buyerName: 'Emma Williams',
      buyerEmail: 'emma.w@email.com',
      product: 'Farm Fresh Eggs (12pc)',
      productImage: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=100&h=100&fit=crop',
      deliveryStatus: 'delivered',
      paymentStatus: 'paid',
      date: '2024-01-14',
      amount: 5.99
    },
    {
      id: 'ORD-001237',
      buyerName: 'James Brown',
      buyerEmail: 'jbrown@email.com',
      product: 'Organic Spinach',
      productImage: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100&h=100&fit=crop',
      deliveryStatus: 'cancelled',
      paymentStatus: 'pending',
      date: '2024-01-14',
      amount: 2.99
    },
    {
      id: 'ORD-001238',
      buyerName: 'Lisa Anderson',
      buyerEmail: 'lisa.a@email.com',
      product: 'Organic Tomatoes (1kg)',
      productImage: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=100&h=100&fit=crop',
      deliveryStatus: 'shipped',
      paymentStatus: 'paid',
      date: '2024-01-13',
      amount: 4.99
    },
  ];
  
  export const transactions = [
    {
      id: 'TXN-001',
      type: 'sale',
      description: 'Sale - ORD-001234',
      amount: 4.99,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 'TXN-002',
      type: 'sale',
      description: 'Sale - ORD-001235',
      amount: 15.99,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 'TXN-003',
      type: 'withdrawal',
      description: 'Withdrawal to Bank Account',
      amount: -500.00,
      date: '2024-01-14',
      status: 'pending'
    },
    {
      id: 'TXN-004',
      type: 'sale',
      description: 'Sale - ORD-001236',
      amount: 5.99,
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 'TXN-005',
      type: 'refund',
      description: 'Refund - ORD-001237',
      amount: -2.99,
      date: '2024-01-14',
      status: 'completed'
    },
  ];
  
  export const walletStats = {
    totalEarnings: 45780.50,
    pendingPayouts: 1245.30,
    availableBalance: 8650.75,
    thisMonthEarnings: 12450.00,
    earningsGrowth: 12.5,
  };
  