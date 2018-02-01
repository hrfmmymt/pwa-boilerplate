import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
));

import style from '../style.css';

const Layout = (props) => {
  return (
    <BrowserRouter>
      <div>
        <div className={style['header']}>
          <h1 className={style['title']}>PWA Boilerplate</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/foo">Foo</Link></li>
            <li><Link to="/bar">Bar</Link></li>
          </ul>
        </div>

        <Route exact path="/" component={Home}/>
        <Route path="/foo" component={Foo}/>
        <Route path="/bar" component={Bar}/>

        <footer>
          <div>Footer</div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyY8FXs9TbzZQ1NwBmG--DTHdo5NzNpzw&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

const Foo = () => {
  return (
    <div>
      <h2>Foo</h2>
    </div>
  );
};

const Bar = () => {
  return (
    <div>
      <h2>Bar</h2>
    </div>
  );
};

export default Layout;
