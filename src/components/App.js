import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home.js';
import Foo from './Foo.js';
import Bar from './Bar.js';

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

export default Layout;
