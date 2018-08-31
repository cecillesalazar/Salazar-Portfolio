import React from 'react';
import '../components-css/socialmedia.css';
import '../components-css/socialmedia.scss';

export default class SocialMedia extends React.Component {
  render() {
    return (
      <div className="rounded-social-buttons">
        <a class="social-button twitter" href="#"></a>
        <a class="social-button linkedin" href="#"></a>
        <a class="social-button github" href="#"></a>
      </div>
    )
  }
}
