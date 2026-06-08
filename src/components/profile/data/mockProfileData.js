// Mock data for Buyer Profile Dashboard

  export const buyerOrders = [
    {
      id: 'ORD-2024-001',
      productName: 'Organic Tomatoes (1kg)',
      productImage: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=400&h=400&fit=crop',
      quantity: 2,
      price: 9.98,
      orderDate: '2024-01-10',
      deliveryStatus: 'delivered',
      trackingNumber: 'TRK123456789'
    },
    {
      id: 'ORD-2024-002',
      productName: 'Premium Rice (5kg)',
      productImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
      quantity: 1,
      price: 15.99,
      orderDate: '2024-01-12',
      deliveryStatus: 'shipped',
      trackingNumber: 'TRK987654321'
    },
    {
      id: 'ORD-2024-003',
      productName: 'Farm Fresh Eggs (12pc)',
      productImage: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
      quantity: 3,
      price: 17.97,
      orderDate: '2024-01-15',
      deliveryStatus: 'processing',
    },
  ];
  
  export const messages = [
    {
      id: 'MSG-001',
      senderName: 'Green Farm Co.',
      senderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      subject: 'Your order has been shipped',
      preview: 'Your order #ORD-2024-002 has been shipped and will arrive in 2-3 business days...',
      timestamp: '2 hours ago',
      unread: true
    },
    {
      id: 'MSG-002',
      senderName: 'MyAgro Support',
      senderAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      subject: 'Welcome to MyAgro!',
      preview: 'Thank you for joining MyAgro. Here are some tips to get started...',
      timestamp: '1 day ago',
      unread: false
    },
  ];
  
  export const reviews= [
    {
      id: 'REV-001',
      productName: 'Organic Tomatoes (1kg)',
      productImage: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=400&h=400&fit=crop',
      rating: 5,
      reviewText: 'Fresh and delicious! Great quality tomatoes.',
      date: '2024-01-11',
      status: 'published'
    },
    {
      id: 'REV-002',
      productName: 'Farm Fresh Eggs (12pc)',
      productImage: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop',
      rating: 4,
      reviewText: 'Good quality eggs, packaging could be better.',
      date: '2024-01-13',
      status: 'published'
    },
  ];
  
  export const vouchers = [
    {
      id: 'VCH-001',
      code: 'WELCOME20',
      title: '20% Off First Order',
      discount: '20% OFF',
      expiryDate: '2024-02-28',
      minPurchase: 50,
      used: false
    },
    {
      id: 'VCH-002',
      code: 'FRESH15',
      title: '$15 Off Fresh Produce',
      discount: '$15 OFF',
      expiryDate: '2024-01-31',
      minPurchase: 75,
      used: false
    },
    {
      id: 'VCH-003',
      code: 'SAVE10',
      title: '10% Off Everything',
      discount: '10% OFF',
      expiryDate: '2024-01-20',
      minPurchase: 30,
      used: true
    },
  ];
  
  export const followedSellers = [
    {
      id: 'SELL-001',
      name: 'Green Farm Co.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      banner: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=200&fit=crop',
      rating: 4.8,
      followers: 1234,
      products: 48,
      topProducts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=200&h=200&fit=crop',
          name: 'Organic Tomatoes',
          price: 4.99
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200&h=200&fit=crop',
          name: 'Fresh Carrots',
          price: 3.49
        },
      ]
    },
    {
      id: 'SELL-002',
      name: 'Organic Valley Farms',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      banner: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=200&fit=crop',
      rating: 4.6,
      followers: 856,
      products: 32,
      topProducts: [
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop',
          name: 'Premium Rice',
          price: 15.99
        },
      ]
    },
  ];
  
  export const addresses= [
    {
      id: 'ADDR-001',
      name: 'John Doe',
      phone: '+1 (555) 123-4567',
      street: '123 Main Street, Apt 4B',
      city: 'San Francisco',
      state: 'California',
      zipCode: '94102',
      isDefault: true,
      deliveryNotes: 'Leave package at door'
    },
    {
      id: 'ADDR-002',
      name: 'John Doe',
      phone: '+1 (555) 987-6543',
      street: '456 Oak Avenue',
      city: 'Oakland',
      state: 'California',
      zipCode: '94601',
      isDefault: false,
    },
  ];
  
  export const recentlyViewed = [
    {
      id: 1,
      name: 'Organic Spinach',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
      price: 2.99,
      oldPrice: 3.99,
    },
    {
      id: 2,
      name: 'Fresh Carrots Bundle',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop',
      price: 3.49,
      oldPrice: 4.49,
    },
    {
      id: 3,
      name: 'Premium Rice (5kg)',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
      price: 15.99,
      oldPrice: 19.99,
    },
  ];
  
  export const recentSearches = [
    'organic vegetables',
    'fresh tomatoes',
    'dairy products',
    'rice',
    'farm fresh eggs',
  ];
  