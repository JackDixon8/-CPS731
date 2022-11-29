import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'


export default function Test() {

  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }

  function errorLocation() {
    setupMap([-2.24, 53.48])
  }

  function setupMap(center) {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 15
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new Directions({
      accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
  }


  useEffect(() => {
    async function renderMap() {
      mapboxgl.accessToken =
      "pk.eyJ1IjoiamFja2RpeG9uOCIsImEiOiJjbGFhNm04eDQwMjN2M29tcW4xdTc2bTFtIn0.C_7t9rnmqC7AnHklldLmaQ"
    
      navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
        enableHighAccuracy: true
      })
  };
  renderMap()
}, [])

  return(
    <div id="map"></div>
  );
}
  