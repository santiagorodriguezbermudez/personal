import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
