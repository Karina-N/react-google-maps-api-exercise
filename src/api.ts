import { MarkerType } from "./App";

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
        throw new Error("Oh no something is wrong..");
      } else {
        return response.json();
      }
    })
    .then((result) => {
      return result.results;
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
