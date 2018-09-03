import React from 'react';
import '../components-css/projects.css';
import Contact from './contact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TypeWriter from 'react-typewriter';

export default class Projects extends React.Component {
  render() {
    return (
      <Router>
        <div className="">
          <h1><TypeWriter typing={1}>{'Projects I\'m working on...'}</TypeWriter></h1>
          <div className="Historia">
            <p className="historia-text">Historia<br/><br/>A full stack create-your-own-<br/>adventure visual novel app</p>
          </div>
          <div className="historia-stats-container">
            <p className="labels">HTML5</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px", backgroundColor: "#ffe52c" }}>
              <div className="bar" style={{ height: "24px", width: "10%", backgroundColor: "#c4d70c" }}>10%</div>
            </div>
            <p className="labels" style={{ top: "12%" }}>Node</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px", top: "12%", backgroundColor: "#ffe52c" }}>
              <div className="bar" style={{ height: "24px", width: "10%", backgroundColor: "#c4d70c" }}>10%</div>
            </div>
            <p className="labels" style={{ top: "24%" }}>React</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px", top: "24%", backgroundColor: "#ffe52c" }}>
              <div className="bar" style={{ height: "24px", width: "40%", backgroundColor: "#c4d70c" }}>40%</div>
            </div>
            <p className="labels" style={{ top: "36%" }}>Redux</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px", top: "36%", backgroundColor: "#ffe52c" }}>
              <div className="bar" style={{ height: "24px", width: "30%", backgroundColor: "#c4d70c" }}>30%</div>
            </div>
            <p className="labels" style={{ top: "48%" }}>Bcrypt</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px", top: "48%", backgroundColor: "#ffe52c" }}>
              <div className="bar" style={{ height: "24px", width: "5%", backgroundColor: "#c4d70c" }}>5%</div>
            </div>
            <p className="labels" style={{ top: "60%" }}>JWT</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px", top: "60%", backgroundColor: "#ffe52c" }}>
              <div className="bar" style={{ height: "24px", width: "5%", backgroundColor: "#c4d70c" }}>5%</div>
            </div>
          </div>
          <div className="Miko-Adventures">
            <p className="miko-adventures-text">{'Miko\'s Adventure'}<br/><br/> A pixel art game of<br/>my Shiba inu’s daily adventures</p>
          </div>
          <div className="miko-adventures-stats-container">
            <p className="labels" style={{ top: "12%" }}>Phaser</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px", backgroundColor: "#ffe52c" }}>
              <div className="bar" style={{ height: "24px", width: "80%", backgroundColor: "#c4d70c" }}>80%</div>
            </div>
            <p className="labels">HTML5</p>
            <div className="border" style={{ border: "2px solid #c22303", width: "300px", backgroundColor: "#ffe52c", top: "12%" }}>
              <div className="bar" style={{ height: "24px", width: "20%", backgroundColor: "#c4d70c" }}>20%</div>
            </div>
          </div>

          <a className="down-button-4" href="#">
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
