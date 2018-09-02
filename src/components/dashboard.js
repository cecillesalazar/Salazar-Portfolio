import React from 'react';
import '../components-css/dashboard.css';
import Floats from './floats';
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
        <Router>
          <div className="dashboard">
            <Sidebar />
            <SocialMedia />
            <div className="tagline-container">
              <h1 className="tagline">
                <TypeWriter typing={1}>
                Full Stack Developer
                <br/>Design Enthusiast
                <br/>Proud Shiba mom :)
                </TypeWriter>
              </h1>
              <Route exact path="/about" component={Floats} />
            </div>
              <div className="button-container">
                <a className="down-button" href="#">
                  <Link to="/about">
                    <span className="bottom"></span>
                  </Link>
                </a>

              </div>
          </div>
        </Router>
      )
    }
}
