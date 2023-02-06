import React from "react";
import { StyledBtn } from "./currentLocation.styles";

type currentLocationProps = {
  moveTo: (position: google.maps.LatLngLiteral) => void;
};

const CurrentLocation: React.FC<currentLocationProps> = ({ moveTo }) => {
  const [disabled, setDisabled] = React.useState(false);

  return (
    <StyledBtn
      disabled={disabled}
      // Deactivate button when geolocation is working
      onClick={() => {
        setDisabled(true);
        navigator.geolocation.getCurrentPosition((position) => {
          // Activate button when geolocation has finished
          setDisabled(false);
          moveTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }}
    >
      {disabled ? <p>Searching ...</p> : <p>Get Current Position</p>}
    </StyledBtn>
  );
};

export default CurrentLocation;
