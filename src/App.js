import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import './App.css';

function App() {
  const [bestRoute, setBestRoute] = useState([]);
  const [locations, setLocations] = useState([]);
  const [amanPosition, setAmanPosition] = useState({ lat: 12.934, lon: 77.620 }); // Aman's initial position

  const calculateTravelTime = (lat1, lon1, lat2, lon2) => {
    // Haversine formula for calculating distance between two points on Earth
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    // Calculate travel time in hours at an average speed of 20 km/hr
    const speed = 20; // Average speed in km/hr
    const travelTime = distance / speed;

    return travelTime;
  };

  useEffect(() => {
     // Fetch locations and restaurants data through API, here API code will come
    // For demo, using static data
    const initialLocations = [
      { id: 'R1', name: 'Restaurant 1', lat: 12.940, lon: 77.625, preparationTime: 15 },
      { id: 'R2', name: 'Restaurant 2', lat: 12.933, lon: 77.626, preparationTime: 20 },
      { id: 'C1', name: 'Consumer 1', lat: 12.935, lon: 77.628 },
      { id: 'C2', name: 'Consumer 2', lat: 12.937, lon: 77.631 },
    ];

    setLocations(initialLocations);

    // Calculate initial best route
    const initialBestRoute = ['Aman', 'R1', 'R2', 'C1', 'C2'];
    setBestRoute(initialBestRoute);

  }, []); 

  return (
    <div className="App">
      <h1>Best Route</h1>
      <Map locations={locations} bestRoute={bestRoute} amanPosition={amanPosition} />
      <p>Best Route: {bestRoute.join(' -> ')}</p>
    </div>
  );
}

export default App;


