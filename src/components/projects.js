import React from 'react';
import '../components-css/projects.css';
import Contact from './contact';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="">
          <h1 className="projects-header">My Current Projects</h1>
          <div className="Historia">
            <p className="historia-text">Historia<br/><br/>A full stack create-your-own-<br/>adventure visual novel app</p>
          </div>
          <div className="historia-stats-container">
            <p className="labels">HTML5</p>
            <div className="border">
              <div className="bar">10%</div>
            </div>
            <p className="labels" style={{ top: "12%" }}>Node</p>
            <div className="border" style={{ top: "12%" }}>
              <div className="bar">10%</div>
            </div>
            <p className="labels" style={{ top: "24%" }}>React</p>
            <div className="border" style={{ top: "24%" }}>
              <div className="bar">40%</div>
            </div>
            <p className="labels" style={{ top: "36%" }}>Redux</p>
            <div className="border" style={{ top: "36%" }}>
              <div className="bar">30%</div>
            </div>
            <p className="labels" style={{ top: "48%" }}>Bcrypt</p>
            <div className="border" style={{ top: "48%" }}>
              <div className="bar">5%</div>
            </div>
            <p className="labels" style={{ top: "60%" }}>JWT</p>
            <div className="border" style={{ top: "60%" }}>
              <div className="bar">5%</div>
            </div>
          </div>
          <div className="Miko-Adventures">
            <p className="miko-adventures-text">{'Miko\'s Adventure'}<br/><br/> A pixel art game of<br/>my Shiba inu’s daily adventures</p>
          </div>
          <div className="miko-adventures-stats-container">
            <p className="labels" style={{ top: "12%" }}>Phaser</p>
            <div className="border">
              <div className="bar">80%</div>
            </div>
            <p className="labels">HTML5</p>
            <div className="border" style={{ top: "12%" }}>
              <div className="bar">20%</div>
            </div>
          </div>
        </div>
    )
  }
}
