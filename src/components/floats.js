import React from 'react';
import '../components-css/floats.css';
import Stats from './stats';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Floats extends React.Component {
  render() {
    return (
        <section className="floats-container">
            <div className="floating-one"></div>
            <div className="floating-two"></div>
            <div className="floating-three"></div>
        </section>
    )
  }
}
