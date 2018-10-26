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
                    <p className="historia-text"><br/><br/>Historia<br/><br/>A full stack create-your-own-<br/>adventure visual novel app</p>
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
                <br/>
                <br/>
                <a className="historia-link" href="https://stark-caverns-30288.herokuapp.com/">Click here to see it Live!</a><br/>
                <a className="historia-link" href="https://github.com/cecillesalazar/Historia">Click here to see it on Github!</a>
              </div>

              <div className="second-col">
                <div className="Atlas">
                    <p className="atlas-text"><br/><br/>Atlas<br/><br/> A geography learning app based on<br/>a spaced repetition algorithm</p>
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
                <br/>
                <br/>
                <a className="atlas-link" href="https://countries-client.herokuapp.com/">Click here to see it Live!</a><br/>
                <a className="atlas-link" href="https://github.com/cecillesalazar/Atlas">Click here to see it on Github!</a>
            </div>






              <div className="third-col">
                <div className="Go">
                  <p className="go-text"><br/><br/>Go!<br/><br/>An nature lovers app that creates<br/>communities around local nature spots</p>
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
                <br/>
                <br/>
                <a className="go-link" href="https://dry-waters-99312.herokuapp.com">Click here to see it Live!</a><br/>
                <a className="historia-link" href="https://github.com/cecillesalazar/Go">Click here to see it on Github!</a>
              </div>
            </div>



          </section>
        </div>
    )
  }
}
