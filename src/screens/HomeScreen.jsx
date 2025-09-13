import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const navigationButtons = [
    {
      title: "Explore Map",
      description: "Interactive map with landmarks",
      icon: "🗺️",
      path: "/map",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Events & Festivals",
      description: "Cultural events and celebrations",
      icon: "🎭",
      path: "/events",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "Itinerary Generator",
      description: "Plan your perfect trip",
      icon: "📋",
      path: "/itinerary",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Hotels & Food",
      description: "Stay and dine options",
      icon: "🏨",
      path: "/hotels-food",
      color: "bg-orange-500 hover:bg-orange-600"
    },
    {
      title: "Safety & Emergency",
      description: "Emergency contacts & safety tips",
      icon: "🚨",
      path: "/safety",
      color: "bg-red-500 hover:bg-red-600"
    },
    {
      title: "Eco-Travel",
      description: "Sustainable travel options",
      icon: "🌱",
      path: "/eco-travel",
      color: "bg-emerald-500 hover:bg-emerald-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-600 mb-2">
              Namma Mysuru
            </h1>
            <p className="text-gray-600 text-lg">
              Your Complete Guide to the City of Palaces
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Mysuru Palace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-2">Welcome to Mysuru</h2>
                  <p className="text-lg opacity-90">Discover the royal heritage and cultural richness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {navigationButtons.map((button, index) => (
            <Link
              key={index}
              to={button.path}
              className={`${button.color} text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-200 block`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{button.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{button.title}</h3>
                  <p className="text-white text-opacity-90">{button.description}</p>
                </div>
                <div className="text-2xl">→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Quick Facts</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-600">15+</div>
              <div className="text-sm text-gray-600">Major Attractions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">10</div>
              <div className="text-sm text-gray-600">Days of Dasara</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">600+</div>
              <div className="text-sm text-gray-600">Years of History</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution Button */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <Link
          to="/contribute"
          className="block bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">📸</span>
            <span className="font-semibold">Share Your Mysuru Story</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomeScreen
