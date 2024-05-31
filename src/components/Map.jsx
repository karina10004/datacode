import React from 'react'
import { GoogleMap, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "300px",
};

const coordinates = {
  lat: 22.72518311147502,
  lng: 75.87308612090938,
};
const Map = () => {
  return (
    <div>
        <div className="location">
      <h1>Event Venue</h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={15}
        googleMapsApiKey="AIzaSyB-Nv4msZO1zHO2Zm34f2x6_FmBXdr3c-Y"
        className="map">
        <Marker position={coordinates}></Marker>
      </GoogleMap>
    </div>
    </div>
  )
}

export default Map