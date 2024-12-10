import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Redirect from root to home */}
          <Redirect exact from="/" to="/home" />

          {/* About page */}
          <Route exact path="/about" component={AboutPage} />

          {/* Landing page */}
          <Route exact path="/home" component={LandingPage} />

          {/* Projects page */}
          <Route exact path="/Projects" component={Projects} />

          {/* Contact Me page */}
          <Route exact path="/ContactMe" component={ContactMe} />

          {/* If none of the other routes matched, redirect to home */}
          <Route>
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
