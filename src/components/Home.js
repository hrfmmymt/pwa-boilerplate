import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Autocomplete from 'react-google-autocomplete';

const MyMapComponent = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
);

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <MyMapComponent
        isMarkerShown
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

      <Autocomplete
        style={{width: '100%'}}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        types={['(regions)']}
        componentRestrictions={{country: 'jp'}}
      />
    </div>
  );
};

export default Home;
