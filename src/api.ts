import { Marker } from "@react-google-maps/api";
import { MarkerType, WeatherType } from "./App";

const PLACE_RADIUS = 2500; // 2500 meteres
const TYPE = "bar";

// OPTION 1
// .then().catch()

export const fetchNearbyPlaces = (lat: number, lng: number): Promise<MarkerType[]> => {
  return fetch(
    `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${lat}%2C${lng}&type=${TYPE}&radius=${PLACE_RADIUS}&language=en`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ad1c0bd46fmsh4bcb496cebcadd6p1d4abejsn64b63ec5b9f3",
        "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Oh no something is wrong when fetching places..");
      } else {
        return response.json();
      }
    })
    .then((result) => {
      return result.results;
    })
    .catch((err) => console.error(err));
};

export const fetchWeather = (marker: MarkerType): Promise<WeatherType> => {
  fetch(
    `https://yahoo-weather5.p.rapidapi.com/weather?lat=${marker.location.lat}&long=${marker.location.lng}&format=json&u=c`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY!,
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Oh no something is wrong when fetching weather..");
      } else {
        return response.json();
      }
    })
    .then((result) => {
      return {
        temp: result.current_observation.condition.temperature,
        text: result.current_observation.condition.text,
      };
    })
    .catch((err) => console.error(err));
};

// OPTION 2
// async await

// export const fetchNearbyPlaces = async (lat: number, lng: number): Promise<MarkerType[]> => {
//   const response = await fetch(
//     `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${lat}%2C${lng}&type=${TYPE}&radius=${PLACE_RADIUS}&language=en`,
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": process.env.REACT_APP_API_KEY!,
//         "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Oh no something is wrong..");
//   }

//   const data = await response.json();
//   return data.results;
// };

// export const fetchWeather = async (marker: MarkerType): Promise<WeatherType> => {
//   const response = await fetch(
//     `https://yahoo-weather5.p.rapidapi.com/weather?lat=${marker.location.lat}&long=${marker.location.lng}&format=json&u=c`,
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": process.env.REACT_APP_API_KEY!,
//         "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Oh no something is wrong..");
//   }

//   const data = await response.json();

//   return {
//     temp: data.current_observation.condition.temperature,
//     text: data.current_observation.condition.text,
//   };
// };
