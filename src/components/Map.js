import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ locations, bestRoute, amanPosition }) {
  return (
    <MapContainer center={[12.932, 77.617]} zoom={14} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(location => (
        <Marker
          key={location.id}
          position={[location.lat, location.lon]}
        >
          <Popup>
            <strong>{location.name}</strong>
          </Popup>
        </Marker>
      ))}
      <Polyline
        positions={bestRoute
          .map(id => locations.find(loc => loc.id === id))
          .filter(loc => loc && loc.lat && loc.lon) // Filter out undefined locations and those without lat and lon
          .map(loc => [loc.lat, loc.lon])
        }
        color="blue"
      />
      {amanPosition && locations.find(loc => loc.id === 'R1') && (
        <>
          <Polyline
            positions={[
              [amanPosition.lat, amanPosition.lon],
              [locations.find(loc => loc.id === 'R1').lat, locations.find(loc => loc.id === 'R1').lon],
            ]}
            color="red"
          />
          <Polyline
            positions={[
              [amanPosition.lat, amanPosition.lon],
              [locations.find(loc => loc.id === 'R1').lat, locations.find(loc => loc.id === 'R1').lon],
            ]}
            color="blue"
          />
        </>
      )}
      {amanPosition && (
        <Marker position={[amanPosition.lat, amanPosition.lon]} icon={amanIcon}>
          <Popup>Aman's Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

const amanIcon = new L.Icon({
  iconUrl: 'https://static.vecteezy.com/system/resources/previews/008/449/511/original/the-delivery-driver-drives-through-a-mobile-phone-with-a-map-screen-online-food-delivery-concept-vector.jpg',
  iconSize: [30, 30],
  iconAnchor: [18, 30],
  popupAnchor: [-3, -76],
});

export default Map;


