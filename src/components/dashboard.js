import React from 'react';
import '../components-css/dashboard.css';
import Floats from './floats';
import Sidebar from './sidebar';
import SocialMedia from './socialmedia';
import Stats from './stats';
import Projects from './projects';
import TypeWriter from 'react-typewriter'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
      return (
        <div className="dashboard">
          <Sidebar />
          <SocialMedia />
          <div className="tagline-container">
            <h1 className="tagline">
              <TypeWriter typing={1}>
              Full Stack Developer
              <br/>Designer Newbie
              <br/>Shiba Inu Mom :)
              </TypeWriter>
            </h1>
          </div>
          <Router>
            <div className="button-container">
              <Route exact path="/about" component={Floats} />
              <Route exact path="/stats" component={Stats} />
              <Route exact path="/projects" component={Projects} />

              <a className="down-button" href="#">
                <Link to="/about">
                  <span className="bottom"></span>
                </Link>
              </a>

            </div>

          </Router>
        </div>
      )
    }
}
