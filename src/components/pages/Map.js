import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -1.2921, // Latitude of Nairobi, Kenya
    lng: 36.8219, // Longitude of Nairobi, Kenya
  };

  return (
    <div name="Map" className='w-full mx-auto mt-10 px-6'>
        <div className='flex justify-center font-bold text-2xl'>Find Us on Google Maps</div>
      <LoadScript googleMapsApiKey="AIzaSyCcVlWq8fKfVusZbICRQIJDCTXAr0iiP_E">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10} 
        >
        
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
