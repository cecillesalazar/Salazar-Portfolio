import React from 'react';
import '../components-css/dashboard.css';
import Floats from './floats';
import TypeWriter from 'react-typewriter'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
          <h1>
            <TypeWriter typing={1}>
            Full Stack Developer
            <br/>Designer Newbie
            <br/>Shiba Inu Mom :)
            </TypeWriter>
          </h1>
          <Floats />
          <div className="down-button">
            <a href="#">
              <span class="bottom"></span>
            </a>
          </div>
      </div>
    )




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
