import { Truck, Shield, Clock, Leaf} from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      id: 1, icon: Truck, title: 'Free Delivery', description: 'Free shipping on orders over $50'
    },
    {
      id: 2, icon: Shield, title: 'Quality Guarantee', description: '100% fresh products or money back'
    },
    {
      id: 3, icon: Clock, title: 'Fast Service', description: 'Same-day delivery available'
    },
    {
      id: 4, icon: Leaf, title: '100% Organic', description: 'Certified organic farming practices'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white border-b">
      <div className="container flex justify-around mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
         
          <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              
               <div
                key={feature.idx}
                className="flex flex-col items-center text-center p-6 rounded-xl "
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
              
          ))}

        </div>
      </div>
    </section>
  );
}