// Settings for the map goes inside this file
import mapStyles from "./mapStyles";

export const containerStyle = {
  width: "100%",
  height: "100vh",
};

// Center on Kalmar
export const center = {
  lat: 39.57,
  lng: 2.65,
};

// Disable default UI
export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
