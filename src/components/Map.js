import React, {useEffect} from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = ({ properties }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map", {
        fullscreenControl: true,
        fullscreenControlOptions: {
          position: "topright", // Control button position
        },
      }).setView([17.3850, 78.4867], 15);

    // Add the tile layer
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19, // Allow zooming in further
      }
    ).addTo(map);

    const propertyList = Array.isArray(properties) ? properties : [properties];
    // Add markers for each property
    const markers = []
    propertyList.forEach((property) => {
      if (property.latitude && property.longitude) {
        const marker=L.marker([property.latitude, property.longitude])
          .addTo(map)
          .bindPopup(
            `<b>${property.name}</b><br>${property.location}<br><button onclick="window.open('https://www.google.com/maps?q=${property.latitude},${property.longitude}', '_blank')">Open in Google Maps</button>`
          );
        markers.push(marker);
      }
    });

    if (markers.length > 0) {
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds(), { padding: [20, 20], maxZoom: 18 });
    }
    
    return () => {
      map.remove(); // Cleanup map instance
    };
  }, [properties]);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default MapComponent;