import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './Components/Nav-bar/Nav'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            < Navigation />
            < Header />
            < About />
            < Skills />
            < Projects />
            < Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
