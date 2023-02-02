import React from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

// Map Settings
import { containerStyle, center, options } from "./settings";

import { Wrapper, LoadingView } from "./App.styles";

const App: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  // Save map in ref if we want to access the map
  const mapRef = React.useRef<google.maps.Map | null>(null);
  // const mapRef = React.useRef<google.maps.Map<Element> | null>(null);

  const onLoad = (map: google.maps.Map): void => {
    // const onLoad = (map: google.maps.Map<Element>): void => {
    mapRef.current = map;
  };

  const onUnMount = (): void => {
    mapRef.current = null;
  };

  if (!isLoaded) {
    return <div>Map Loading...</div>;
  }

  return (
    <Wrapper>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options as google.maps.MapOptions}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnMount}
      />
    </Wrapper>
  );
};

export default App;
