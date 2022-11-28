import React, { useState } from 'react';

import Map, {useMap} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css'
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import { render } from '@testing-library/react';
import 'maplibre-gl/dist/maplibre-gl.css';

import * as turf from '@turf/turf'
import polyline from "@arcgis/core/geometry/Polyline";
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamFja2RpeG9uOCIsImEiOiJjbGFhNm04eDQwMjN2M29tcW4xdTc2bTFtIn0.C_7t9rnmqC7AnHklldLmaQ';
export default function Test() {
 
return (
  
  <Map
  initialViewState={{
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 12
  }}
  style={{width: 800, height: 600}}
  mapStyle="mapbox://styles/mapbox/streets-v9"
  mapboxAccessToken={MAPBOX_TOKEN}
>
 

  </Map>
    
    
  
  );
  
}
