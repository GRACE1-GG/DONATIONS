// src/components/GoogleMap.jsx
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './GoogleMap.css'; // Ensure this file exists and is in the correct path

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -1.2921,
  lng: 36.8219
};

const GoogleMapComponent = () => {
  const [userLocation, setUserLocation] = useState(center);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        
        // Send location to backend
        fetch('/api/track-location', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ latitude, longitude })
        })
        .then(response => response.json())
        .then(data => console.log('Location sent successfully:', data))
        .catch(error => console.error('Error sending location:', error));
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <div className="map-container"> {/* Wrapper div with map-container class */}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={10}
        >
          <Marker position={userLocation} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
