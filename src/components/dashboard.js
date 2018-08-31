import React from 'react';
import '../components-css/dashboard.css';
import Floats from './floats';
import Sidebar from './sidebar';
import SocialMedia from './socialmedia'
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
          <SocialMedia />
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
          <SocialMedia />
          <a className="down-button-1" href="#" onClick={() => this.firstButtonClicked()}>
            <span class="bottom"></span>
          </a>
        </div>
      )
    }
  }
}
