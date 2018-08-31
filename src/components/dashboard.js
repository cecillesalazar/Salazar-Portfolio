import React from 'react';
import '../components-css/dashboard.css';
import Floats from './floats';
import Sidebar from './sidebar';
import SocialMedia from './socialmedia'
import Stats from './stats';
import TypeWriter from 'react-typewriter'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstDownButton: false,
      secondDownButton: false
    }
  }

  firstButtonClicked(bool) {
    this.setState({
      firstDownButton: bool
    })
  }

  secondButtonClicked(bool) {
    this.setState({
      secondDownButton: bool
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
          <a className="down-button-2" href="#" onClick={() => this.secondButtonClicked(true)}>
            <span class="bottom"></span>
          </a>
          <SocialMedia />
        </div>
      )
    } else if (!this.state.firstDownButton){
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
          <a className="down-button-1" href="#" onClick={() => this.firstButtonClicked(true)}>
            <span class="bottom"></span>
          </a>
        </div>
      )
    } else if (this.state.secondDownButton) {

    }
  }
}
