import React from 'react';
import '../components-css/projects.css';
import Contact from './contact';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="">
          <h1 className="projects-header">My Current Projects</h1>

          <div className="col-holder">
            <div className="first-col">
              <div className="Historia">
                  <p className="historia-text"><a className="historia-link" href="https://stark-caverns-30288.herokuapp.com/">Historia<br/><br/>A full stack create-your-own-<br/>adventure visual novel app</a></p>
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
                  <p className="atlas-text"><a className="atlas-link" href="https://countries-client.herokuapp.com/">Atlas<br/><br/> A geography learning app based on<br/>a spaced repetition algorithm</a></p>
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
              <div className="Guidepost">
                <p className="guidepost-text">Guidepost<br/><br/>A daily advice generator for<br/>self help geeks</p>
              </div>

              <div className="guidepost-stats-container">
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
                <p className="labels">Bcrypt</p>
                <div className="border">
                  <div className="bar" style={{ width: "10%" }}>5%</div>
                </div>
                <p className="labels">JWT</p>
                <div className="border">
                  <div className="bar" style={{ width: "10%" }}>5%</div>
                </div>
                <p className="labels">GraphQL</p>
                <div className="border">
                  <div className="bar" style={{ width: "35%" }}>30%</div>
                </div>
              </div>
            </div>
          </div>

            <div className="col-holder2">
              <div className="fourth-col">
                <div className="Miko-Adventures">
                  <p className="miko-adventures-text">{'Miko\'s Adventure'}<br/><br/> A pixel art game of<br/>my Shiba inu’s daily adventures</p>
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

        </div>
    )
  }
}
