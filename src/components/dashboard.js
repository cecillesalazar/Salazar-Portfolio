import React from 'react';
import '../components-css/dashboard.css';
import Floats from './floats';
import Stats from './stats';
import Projects from './projects';
import Contact from './contact';
import Sidebar from './sidebar';
import TypeWriter from 'react-typewriter';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <main>
          <div className="dashboard">
            <Sidebar />
            <section className="tagline-container">
              <h1 className="tagline">
                <TypeWriter typing={1}>
                  Full Stack Developer
                  <br/>Design Enthusiast
                  <br/>Proud Shiba mom :)
                </TypeWriter>
              </h1>
            </section>
            <section className="scroll-content">
              <Floats />
              <div className="about-me">
                <br/>Code that brings joy is the goal.
                <br/>Which is why I make niche games.
                <br/>My dream job is to bring that joy
                <br/>into a diverse team with a product
                <br/>that brings communities together.
              </div>
              <Stats />
              <Projects />
              <Contact />
            </section>
          </div>
        </main>
      )
    }
}
