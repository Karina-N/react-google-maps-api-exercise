import React from "react";
import { GoogleMap, MarkerF, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
// (in React18 {Marker} does not work anymore - (class component), instead use {MarkerF} - functional component)
import { useQuery } from "react-query";
// Api Calls
import { fetchNearbyPlaces } from "./api";

// Map Settings
import { containerStyle, center, options } from "./settings";
// Image
import beerIcon from "./images/beer.svg";
// Styles
import { Wrapper, LoadingView } from "./App.styles";

export type MarkerType = {
  id: string;
  location: google.maps.LatLngLiteral;
  name: string;
  phone_number: string;
  website: string;
};

const App: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
  });

  // Save map in ref if we want to access the map
  const mapRef = React.useRef<google.maps.Map | null>(null);
  // const mapRef = React.useRef<google.maps.Map<Element> | null>(null);

  const [clickedPos, setClickedPos] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral);

  const {
    data: nearbyPositions,
    isLoading,
    isError,
  } = useQuery([clickedPos.lat, clickedPos.lng], () => fetchNearbyPlaces(clickedPos.lat, clickedPos.lng), {
    enabled: !!clickedPos.lat, // double exclamation convert to boolean
    refetchOnWindowFocus: false,
  });

  console.log(nearbyPositions);

  const onLoad = (map: google.maps.Map): void => {
    // const onLoad = (map: google.maps.Map<Element>): void => {
    mapRef.current = map;
  };

  const onUnMount = (): void => {
    mapRef.current = null;
  };

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng !== null) {
      setClickedPos({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    }
  };

  const onMarkerClick = (marker: MarkerType) => {
    console.log(marker);
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
        onClick={onMapClick}
      >
        {clickedPos.lat ? <MarkerF position={clickedPos} /> : null}
        {nearbyPositions?.map((marker) => {
          return (
            <MarkerF
              key={marker.id}
              position={marker.location}
              onClick={() => onMarkerClick(marker)}
              icon={{
                url: beerIcon,
                scaledSize: new window.google.maps.Size(20, 20),
              }}
            />
          );
        })}
      </GoogleMap>
    </Wrapper>
  );
};

export default App;
