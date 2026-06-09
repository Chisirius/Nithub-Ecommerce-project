export function ComingSoon() {

  const services = [
    {
      id: 1,
      name: 'Farm Equipment',
      description: 'Modern tools & machinery',
      image: 'https://images.unsplash.com/photo-1655980235599-8e3d642e4993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwZXF1aXBtZW50JTIwdG9vbHN8ZW58MXx8fHwxNzY0NzU3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 2,
      name: 'Seeds & Plants',
      description: 'Premium seedlings & saplings',
      image: 'https://images.unsplash.com/photo-1611504261400-bca14f7e0b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMHBsYW50cyUyMGdyb3dpbmd8ZW58MXx8fHwxNzY0NzU0MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-lime-400 to-green-500'
    },
    {
      id: 3,
      name: 'Agri Blog',
      description: 'Tips, guides & insights',
      image: 'https://images.unsplash.com/photo-1532431969643-7e87739f15e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYmxvZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzY1MzgyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 4,
      name: 'Labour Services',
      description: 'Skilled farm workforce',
      image: 'https://images.unsplash.com/photo-1762885590956-06eecab2096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB3b3JrZXJzJTIwZmFybXxlbnwxfHx8fDE3NjUzODI1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-amber-400 to-orange-500'
    }
  ];


  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4 text-18">Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exciting new features and services launching soon to enhance your agricultural experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-gray-800 text-xs uppercase tracking-wide">Soon</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-white mb-2">{service.name}</h3>
                <p className="text-gray-200 text-sm">{service.description}</p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}