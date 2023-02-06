# Description

A code along exercise to use Google Maps / Geolocation.
Find all the bars (or another type of place, like cafe) in your area.

### Technologies used:

- React
- Typescript

- React Query
- styled components

- APIs used:
  - React Google Maps API
  - [Rapid API](https://rapidapi.com):
    - [TrueWay Places API](https://rapidapi.com/trueway/api/trueway-places) => search for places in the map
    - [Yahoo Weather](https://rapidapi.com/apishub/api/yahoo-weather5) => get weather forecast for specific location

# How to run the app:

1. Signup to rapidapi.com to be able to use APIs: https://rapidapi.com/auth/sign-up
2. For every API you would like to use subscribe to FREE plan to get API KEY

- https://rapidapi.com/trueway/api/trueway-places/pricing
- https://rapidapi.com/apishub/api/yahoo-weather5/pricing

3. Signin/ signup to Google Maps Platform to get a FREE API key. (You will have to add your card details..)
   https://developers.google.com/maps

4. Clone the repo

```
https://github.com/Karina-N/react-google-maps-api-exercise.git
```

5. Install npm packages

```
npm install
```

6. Create .env file and save your API keys

```
REACT_APP_GOOGLE_KEY=your_unique_google_maps_api_key_goes_here
REACT_APP_API_KEY=your_unique_rapid_api_key_goes_here
```

7. Make sure .env file is added to .gitignore
8. Restart server after saving environment variables ;)
9. Run the app

```
npm start
```
