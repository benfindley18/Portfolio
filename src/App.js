import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Document } from "react-pdf";
import Navigation from './Components/Nav-bar/Nav'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Resume from './Components/imgs/resume.pdf'

function App() {
  return (
    <>
      <Router>

        <Switch>
          {/* <Route path="/resume">
            <Document file='https://drive.google.com/file/d/1jTzRNcQx0tDZeS_HcD3gKZCUq8e9nWeJ/view?usp=sharing' />
          </Route> */}

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
