import React, { useState } from 'react';
import Map from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Test() {
  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 11
  });
  return(
  <Map
    style={{ width: '40%', height: '40vh' }}
    mapStyle='mapbox://styles/mapbox/light-v9'
    accessToken={'pk.eyJ1IjoiamFja2RpeG9uOCIsImEiOiJjbGFhNm04eDQwMjN2M29tcW4xdTc2bTFtIn0.C_7t9rnmqC7AnHklldLmaQ'}
    latitude={viewport.latitude}
    longitude={viewport.longitude}
    zoom={viewport.zoom}
    onViewportChange={setViewport}
  />
  
  
  
  );
}
  