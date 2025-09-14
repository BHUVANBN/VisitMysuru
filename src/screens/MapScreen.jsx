import { useState } from 'react'
import { Link } from 'react-router-dom'

const MapScreen = () => {
  const [selectedLandmark, setSelectedLandmark] = useState(null)
  const [showContributeForm, setShowContributeForm] = useState(false)

  const landmarks = [
    {
      id: 1,
      name: "Mysuru Palace",
      position: { top: '45%', left: '50%' },
      story: "The magnificent Mysuru Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence. It served as the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore.",
      photos: [
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "🏰"
    },
    {
      id: 2,
      name: "Chamundi Hills",
      position: { top: '25%', left: '70%' },
      story: "Chamundi Hills, located at a height of 1,065 meters, is one of the most sacred places in Mysuru. The hill is crowned by the Sri Chamundeshwari Temple, dedicated to Goddess Chamundi.",
      photos: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "⛰️"
    },
    {
      id: 3,
      name: "Mysuru Zoo",
      position: { top: '60%', left: '40%' },
      story: "Established in 1892, the Mysuru Zoo is one of the oldest and most popular zoos in India. It houses a wide variety of species and is known for its conservation efforts.",
      photos: [
        "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "🦁"
    },
    {
      id: 4,
      name: "Brindavan Gardens",
      position: { top: '80%', left: '30%' },
      story: "The beautiful Brindavan Gardens are located below the Krishna Raja Sagara dam. Famous for its symmetric design and musical fountain, it attracts thousands of visitors daily.",
      photos: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "🌸"
    },
    {
      id: 5,
      name: "St. Philomena's Cathedral",
      position: { top: '35%', left: '45%' },
      story: "This Neo-Gothic cathedral is one of the largest churches in India. Built in 1956, it's inspired by the Cologne Cathedral in Germany and houses relics of St. Philomena.",
      photos: [
        "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "⛪"
    }
  ]

  const handleLandmarkClick = (landmark) => {
    setSelectedLandmark(landmark)
  }

  const closeModal = () => {
    setSelectedLandmark(null)
    setShowContributeForm(false)
  }

  const handleContribute = () => {
    setShowContributeForm(true)
  }

  return (
    <div className="bg-gray-50 pt-20">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Interactive Map</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Mysuru's landmarks and attractions. Click on any pin to learn more about the location and discover its stories.
            </p>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            {/* Map Background */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-green-100 to-green-200">
              <img
                src=" src/assets/gettyimages-1461672520-1024x1024.jpg"
                alt="Mysuru Map"
                className="w-full h-full object-cover opacity-70"
              />
              
              {/* Landmark Pins */}
              {landmarks.map((landmark) => (
                <button
                  key={landmark.id}
                  onClick={() => handleLandmarkClick(landmark)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-500 hover:scale-110 transition-transform"
                  style={{ top: landmark.position.top, left: landmark.position.left }}
                >
                  <span className="text-2xl">{landmark.icon}</span>
                </button>
              ))}
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
              <h3 className="font-semibold text-sm mb-2">Landmarks</h3>
              <div className="space-y-1">
                {landmarks.map((landmark) => (
                  <div key={landmark.id} className="flex items-center text-xs">
                    <span className="mr-2">{landmark.icon}</span>
                    <span>{landmark.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-orange-50 rounded-lg p-4">
          <p className="text-orange-800 text-center">
            <span className="font-semibold">💡 Tip:</span> Click on any landmark pin to learn more about it and see photos!
          </p>
        </div>
      </div>

      {/* Landmark Modal */}
      {selectedLandmark && !showContributeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="mr-2 text-3xl">{selectedLandmark.icon}</span>
                  {selectedLandmark.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Story */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Story</h3>
                <p className="text-gray-600 leading-relaxed">{selectedLandmark.story}</p>
              </div>

              {/* Photos */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Photos</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedLandmark.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${selectedLandmark.name} ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleContribute}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                📸 Add My Photo/Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contribution Form Modal */}
      {showContributeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Share Your Experience</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Photo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Story/Caption
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows="4"
                    placeholder="Share your experience at this landmark..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your name"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Contribution
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MapScreen