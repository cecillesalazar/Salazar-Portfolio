import React from 'react';
import '../components-css/projects.css';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="">
        <h1>{'What I\'m working on...'}</h1>
        <div className="Historia">
          <p className="historia-text">Historia<br/><br/>A full stack create-your-own-<br/>adventure visual novel app</p>
        </div>
        <div className="Miko-Adventures">
          <p className="miko-adventures-text">{'Miko\'s Adventure'}<br/><br/> A pixel art game of<br/>my Shiba inu’s daily adventures</p>
        </div>
      </div>
    )
  }
}
