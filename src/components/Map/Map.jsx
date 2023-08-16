import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({data}) => {
  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    la: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCmjvkXB_DMnBUNwxQztLMStyQma_szbNw">
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;