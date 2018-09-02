import React from 'react';
import '../components-css/dashboard.css';
import Stats from './stats';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Floats extends React.Component {
  render() {
    return (
      <Router>
        <div className="floats-container">
            <div className="floating-one"></div>
            <div className="floating-two"></div>
            <div className="floating-three"></div>

            <a className="down-button-2" href="#">
              <Link to="/stats">
                <span className="bottom"></span>
              </Link>
            </a>
            <Route exact path="/stats" component={Stats} />
        </div>
      </Router>
    )
  }
}
