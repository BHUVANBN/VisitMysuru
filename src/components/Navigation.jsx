import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Things to do', path: '/map' },
    { name: 'Events & Festivals', path: '/events' },
    { name: 'Plan your visit', path: '/itinerary' },
    { name: 'Where to stay', path: '/hotels-food' },
    { name: 'Travel info', path: '/safety' },
    { name: 'Sustainable travel', path: '/eco-travel' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-gray-900 tracking-tight">Namma Mysuru</div>
              <div className="text-xs text-gray-500 font-medium tracking-wide uppercase">Official Tourism Guide</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 relative py-2 ${
                  isActive(item.path)
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-64 pl-9 pr-3 py-2.5 border border-gray-200 rounded-full text-sm bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white transition-all duration-200"
              />
            </div>
            <Link
              to="/contribute"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Share your story
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 pt-4 pb-6 space-y-1">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full pl-9 pr-3 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-orange-600 bg-orange-50 rounded-lg'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-lg'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/contribute"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
                >
                  Share your story
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
