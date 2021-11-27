import L from 'leaflet';

import { DEFAULT_MAP_CENTER } from "../constants";

export const createMap = (mapCenterLatLng: L.LatLngExpression = DEFAULT_MAP_CENTER): L.Map => {
  var map = L.map('map').setView(mapCenterLatLng, 13);

  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  return map;
}