import React from 'react';
import '../components-css/dashboard.css';
import Floats from './floats';
import Stats from './stats';
import Projects from './projects';
import Contact from './contact';
import Sidebar from './sidebar';
import SocialMedia from './socialmedia';
import TypeWriter from 'react-typewriter';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <div className="dashboard">
          <Sidebar />
          <div className="tagline-container">
            <h1 className="tagline">
              <TypeWriter typing={1}>
              Full Stack Developer
              <br/>Design Enthusiast
              <br/>Proud Shiba mom :)
              </TypeWriter>
            </h1>
          </div>
          <Floats />
          <Stats />
          <Projects />
          <Contact />
          <SocialMedia />
        </div>
      )
    }
}
