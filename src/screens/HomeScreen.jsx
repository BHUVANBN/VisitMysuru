import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const navigationButtons = [
    {
      title: "Things to do",
      description: "Discover attractions, landmarks and hidden gems",
      path: "/map",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Events & Festivals",
      description: "Cultural celebrations and seasonal events",
      path: "/events",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Plan your visit",
      description: "Create personalized itineraries and routes",
      path: "/itinerary",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Where to stay",
      description: "Hotels, restaurants and local experiences",
      path: "/hotels-food",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Travel information",
      description: "Safety tips, transport and practical advice",
      path: "/safety",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Sustainable travel",
      description: "Eco-friendly options and responsible tourism",
      path: "/eco-travel",
      color: "from-emerald-500 to-emerald-600"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-4">
              Welcome to Mysuru
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Your Complete Guide to the City of Palaces - Discover the royal heritage, cultural richness, and hidden gems of Karnataka's cultural capital
            </p>
          </div>

          {/* Hero Image */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="relative h-64 md:h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Mysuru Palace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Mysuru Palace</h2>
                  <p className="text-base md:text-lg opacity-90">The Crown Jewel of Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Explore Mysuru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose from our comprehensive guides and tools to plan your perfect Mysuru experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationButtons.map((button, index) => (
            <Link
              key={index}
              to={button.path}
              className={`bg-gradient-to-br ${button.color} text-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block group relative overflow-hidden`}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">{button.title}</h3>
                <p className="text-white text-opacity-90 text-sm leading-relaxed mb-4">{button.description}</p>
                <div className="flex items-center text-sm font-medium">
                  <span className="mr-2">Explore</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">Mysuru at a Glance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-600">Major Attractions</div>
              <div className="text-xs text-gray-500 mt-1">Palaces, temples, gardens & more</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">10</div>
              <div className="text-sm md:text-base text-gray-600">Days of Dasara</div>
              <div className="text-xs text-gray-500 mt-1">Grand festival celebration</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">600+</div>
              <div className="text-sm md:text-base text-gray-600">Years of History</div>
              <div className="text-xs text-gray-500 mt-1">Rich royal heritage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative px-6 py-12 md:px-12 md:py-16">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Share Your Mysuru Story</h3>
              <p className="text-white text-opacity-90 mb-8 text-lg leading-relaxed">
                Help fellow travelers by sharing your photos, experiences, and hidden gems you've discovered in the City of Palaces
              </p>
              <Link
                to="/contribute"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Start Contributing</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
