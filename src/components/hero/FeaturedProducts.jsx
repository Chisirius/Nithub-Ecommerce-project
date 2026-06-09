import {ShoppingCart, Star} from "lucide-react";
import {useNavigate} from "react-router-dom";

export function FeaturedProducts(){
  const products = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      description: 'Fresh red tomatoes from local farms',
      price: 4.99,
      unit: 'kg',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1665315302321-46989ca7829a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmYXJtfGVufDF8fHx8MTc2NDc0ODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Fresh Strawberries',
      description: 'Sweet organic strawberries',
      price: 7.99,
      unit: 'kg',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1612776573170-6e72ebca79d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJ1aXRzJTIwbWFya2V0fGVufDF8fHx8MTc2NDY2MTU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'Organic'
    },
    {
      id: 3,
      name: 'Vegetable Seeds Mix',
      description: 'Premium quality seeds for your garden',
      price: 12.99,
      unit: 'pack',
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1611504261400-bca14f7e0b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMHBsYW50cyUyMGdyb3dpbmd8ZW58MXx8fHwxNzY0NzU0MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Fresh Dairy Products',
      description: 'Farm fresh milk and dairy',
      price: 5.49,
      unit: 'L',
      rating: 4.6,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1757952724381-3f67aa9cdb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMGZhcm0lMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjQ3NzQ3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'Local'
    }
  ];

  
  const navigate = useNavigate()
  

  function handleNavigate(){
   navigate("/Explore")
  }

  return(
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium agricultural products
            </p>
          </div>
        

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
              >

                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition duration-300" 
                  />
                  {product.badge && (
                  <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    {product.badge}
                  </span>)}
               </div>

                <div className="p-5">
                    
                    <h3 className="text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                 
                    
                  <div className="flex items-center space-x-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-700">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-green-600">₦{product.price}</span>
                      <span className="text-gray-400 text-sm">/{product.unit}</span>
                    </div>

                    <button className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>

                </div>
              </div>
             ))}
          </div>

          <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition" 
          onClick= {handleNavigate}>
            View All Products
          </button>
        </div>
        </div>
      </section>   
  )
}