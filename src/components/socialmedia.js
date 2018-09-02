import React from 'react';
import '../components-css/socialmedia.css';
import '../components-css/socialmedia.scss';

export default class SocialMedia extends React.Component {
  render() {
    return (
      <div className="rounded-social-buttons">
        <a className="social-button linkedin" href="#"></a>
        <a className="social-button github" href="#"></a>
        <a className="social-button twitter" href="#"></a>
      </div>
    )
  }
}
