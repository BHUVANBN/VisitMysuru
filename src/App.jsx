import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import EventsScreen from './screens/EventsScreen'
import ItineraryScreen from './screens/ItineraryScreen'
import HotelsFoodScreen from './screens/HotelsFoodScreen'
import SafetyScreen from './screens/SafetyScreen'
import EcoTravelScreen from './screens/EcoTravelScreen'
import ContributionScreen from './screens/ContributionScreen'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/map" element={<MapScreen />} />
          <Route path="/events" element={<EventsScreen />} />
          <Route path="/itinerary" element={<ItineraryScreen />} />
          <Route path="/hotels-food" element={<HotelsFoodScreen />} />
          <Route path="/safety" element={<SafetyScreen />} />
          <Route path="/eco-travel" element={<EcoTravelScreen />} />
          <Route path="/contribute" element={<ContributionScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
