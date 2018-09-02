import React from 'react';
import '../components-css/socialmedia.css';
import '../components-css/socialmedia.scss';

export default class SocialMedia extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <i class="fa fa-5x fa-twitter-square"></i>
        <i class="fa fa-5x fa-github-square"></i>
        <i class="fa fa-5x fa-linkedin-square"></i>
      </div>
    )
  }
}
