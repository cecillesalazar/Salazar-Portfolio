import React from 'react';
import '../components-css/dashboard.css';
import TypeWriter from 'react-typewriter'

export default class Floats extends React.Component {
  render() {
    return (
      <div className="floats-container">
          <div className="floating-one"></div>
          <div className="floating-two"></div>
          <div className="floating-three"></div>
      </div>
    )
  }
}
