import React from 'react';
import '../components-css/dashboard.css';
import Floats from './floats';
import Sidebar from './sidebar';
import Stats from './stats';
import TypeWriter from 'react-typewriter'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstDownButton: false
    }
  }

  firstButtonClicked() {
    this.setState({
      firstDownButton: true
    })
  }

  render() {
    if(this.state.firstDownButton) {
      return (
        <div className="dashboard">
          <Sidebar />
          <div className="tagline-container">
            <h1 className="tagline">
              <TypeWriter typing={1}>
              Full Stack Developer
              <br/>Designer Newbie
              <br/>Shiba Inu Mom :)
              </TypeWriter>
            </h1>
          </div>
          <Floats />
          <Stats />
        </div>
      )
    } else {
      return (
        <div className="dashboard">
          <Sidebar />
          <div className="tagline-container">
            <h1 className="tagline">
              <TypeWriter typing={1}>
              Full Stack Developer
              <br/>Designer Newbie
              <br/>Shiba Inu Mom :)
              </TypeWriter>
            </h1>
          </div>
          <a href="#" onClick={() => this.firstButtonClicked()}>
            <span class="bottom"></span>
          </a>
        </div>
      )
    }
  }
}

//For After Sketches Submitted
// <div>
//   <p className="character-name">Cecille</p>
//   <div className="character">
//     <p className="character-box-text">Character Bust Placeholder</p>
//   </div>
//   <div className="dialogue-box"></div>
// </div>
