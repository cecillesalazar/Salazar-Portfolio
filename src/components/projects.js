import React from 'react';
import '../components-css/projects.css';
import Contact from './contact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Projects extends React.Component {
  render() {
    return (
      <Router>
        <div className="">
          <h1>{'What I\'m working on...'}</h1>
          <div className="Historia">
            <p className="historia-text">Historia<br/><br/>A full stack create-your-own-<br/>adventure visual novel app</p>
          </div>
          <div className="Miko-Adventures">
            <p className="miko-adventures-text">{'Miko\'s Adventure'}<br/><br/> A pixel art game of<br/>my Shiba inu’s daily adventures</p>
          </div>
          <br/>
          <br/>
          <div className="historia-stats-container">
            <p className="labels">HTML5</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px" }}>
              <div className="bar" style={{ height: "24px", width: "20%", backgroundColor: "#c4d70c" }}></div>
            </div>
          </div>
          <div className="miko-adventures-stats-container">
            <p className="labels">HTML5</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px", backgroundColor: "#ffe52c" }}>
              <div className="bar" style={{ height: "24px", width: "20%", backgroundColor: "#c4d70c" }}></div>
            </div>
          </div>
          <a className="down-button-3" href="#">
            <Link to="/contact">
              <span className="bottom"></span>
            </Link>
          </a>
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}
