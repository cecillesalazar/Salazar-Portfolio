import React from 'react';
import '../components-css/sidebar.css';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="blue"></div>
        <div className="green"></div>
        <div className="red"></div>
      </div>
    )
  }
}