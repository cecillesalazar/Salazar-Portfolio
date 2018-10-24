import React from 'react';
import '../components-css/projects.css';
import Contact from './contact';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container">
          <h1 className="projects-header">My Current Projects</h1>

          <section className="first-row">
            <div className="col-holder">

              <div className="first-col">
                <div className="Historia">
                    <p className="historia-text">Historia<br/><br/>A full stack create-your-own-<br/>adventure visual novel app<br/><br/><a className="historia-link" href="https://stark-caverns-30288.herokuapp.com/">Click here to see it Live!</a><br/><br/><a className="historia-link" href="https://github.com/cecillesalazar/Historia">Click here to see it on Github!</a></p>
                </div>

                <div className="historia-stats-container">
                  <p className="labels">HTML5</p>
                  <div className="border">
                    <div className="bar" style={{ width: "15%"}}>10%</div>
                  </div>
                  <p className="labels" style={{ top: "12%" }}>Node</p>
                  <div className="border">
                    <div className="bar" style={{ width: "15%"}}>10%</div>
                  </div>
                  <p className="labels" style={{ top: "24%" }}>React</p>
                  <div className="border">
                    <div className="bar" style={{ width: "45%"}}>40%</div>
                  </div>
                  <p className="labels">Redux</p>
                  <div className="border">
                    <div className="bar" style={{ width: "35%"}}>30%</div>
                  </div>
                  <p className="labels">Bcrypt</p>
                  <div className="border">
                    <div className="bar" style={{ width: "10%"}}>5%</div>
                  </div>
                  <p className="labels">JWT</p>
                  <div className="border">
                    <div className="bar" style={{ width: "10%"}}>5%</div>
                  </div>
                </div>
              </div>

              <div className="second-col">
                <div className="Atlas">
                    <p className="atlas-text">Atlas<br/><br/> A geography learning app based on<br/>a spaced repetition algorithm<br/><br/><a className="atlas-link" href="https://countries-client.herokuapp.com/">Click here to see it Live!</a><br/><br/><a className="atlas-link" href="https://github.com/cecillesalazar/Atlas">Click here to see it on Github!</a></p>
                </div>

                <div className="atlas-stats-container">
                  <p className="labels">HTML5</p>
                  <div className="border">
                    <div className="bar" style={{ width: "15%" }}>10%</div>
                  </div>
                  <p className="labels">Node</p>
                  <div className="border">
                    <div className="bar" style={{ width: "25%" }}>20%</div>
                  </div>
                  <p className="labels">React</p>
                  <div className="border">
                    <div className="bar" style={{ width: "35%" }}>30%</div>
                  </div>
                  <p className="labels">Redux</p>
                  <div className="border">
                    <div className="bar" style={{ width: "35%" }}>30%</div>
                  </div>
                  <p className="labels">Bcrypt</p>
                  <div className="border">
                    <div className="bar" style={{ width: "10%" }}>5%</div>
                  </div>
                  <p className="labels">JWT</p>
                  <div className="border">
                    <div className="bar" style={{ width: "10%" }}>5%</div>
                  </div>
                </div>
            </div>

              <div className="third-col">
                <div className="Go">
                  <p className="go-text">Go!<br/><br/>An nature lovers app that creates<br/>communities around local nature spots<br/><br/><a className="go-link" href="https://dry-waters-99312.herokuapp.com">Click here to see it Live!</a><br/><br/><a className="historia-link" href="https://github.com/cecillesalazar/Go">Click here to see it on Github!</a></p>
                </div>

                <div className="go-stats-container">
                  <p className="labels">HTML5</p>
                  <div className="border">
                    <div className="bar" style={{ width: "15%" }}>10%</div>
                  </div>
                  <p className="labels">Node</p>
                  <div className="border">
                    <div className="bar" style={{ width: "35%" }}>30%</div>
                  </div>
                  <p className="labels">React</p>
                  <div className="border">
                    <div className="bar" style={{ width: "45%" }}>40%</div>
                  </div>
                  <p className="labels">Bcrypt</p>
                  <div className="border">
                    <div className="bar" style={{ width: "10%" }}>5%</div>
                  </div>
                  <p className="labels">JWT</p>
                  <div className="border">
                    <div className="bar" style={{ width: "10%" }}>5%</div>
                  </div>
                  <p className="labels">Leaflet</p>
                  <div className="border">
                    <div className="bar" style={{ width: "15%" }}>10%</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="second-row">
            <div className="col-holder2">
              <div className="fourth-col">
                <div className="Miko-Adventures">
                  <p className="miko-adventures-text">*~Work in Progress~*<br/>{'Miko\'s Adventure'}<br/><br/> A pixel art game of<br/>my Shiba inu’s daily adventures<br/><br/><a className="miko-adventures-link" href="https://cecillesalazar.github.io/Miko-Adventures/">Click here to see it Live!</a><a className="historia-link" href="https://github.com/cecillesalazar/Miko-Adventures">Click here to see it on Github!</a></p>
                </div>

                <div className="miko-adventures-stats-container">
                  <p className="labels">Phaser</p>
                  <div className="border">
                    <div className="bar" style={{ width: "85%"}}>80%</div>
                  </div>
                  <p className="labels">HTML5</p>
                  <div className="border">
                    <div className="bar" style={{ width: "25%"}}>20%</div>
                  </div>
                  <p className="labels-hidden">React</p>
                  <div className="border-hidden">
                    <div className="bar-hidden" style={{ width: "35%" }}>30%</div>
                  </div>
                  <p className="labels-hidden">Bcrypt</p>
                  <div className="border-hidden">
                    <div className="bar-hidden" style={{ width: "10%" }}>5%</div>
                  </div>
                  <p className="labels-hidden">JWT</p>
                  <div className="border-hidden">
                    <div className="bar-hidden" style={{ width: "10%" }}>5%</div>
                  </div>
                  <p className="labels-hidden">GraphQL</p>
                  <div className="border-hidden">
                    <div className="bar-hidden" style={{ width: "35%" }}>30%</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
  }
}
