import React from 'react';
import '../components-css/socialmedia.css';
import '../components-css/socialmedia.scss';

export default class SocialMedia extends React.Component {
  render() {
    return (
      <section className="rounded-social-buttons">
        <a className="social-button linkedin" href="https://www.linkedin.com/in/cecille-salazar/"></a>
        <a className="social-button github" href="https://github.com/cecillesalazar"></a>
        <a className="social-button twitter" href="https://twitter.com/kcmadventures"></a>
      </section>
    )
  }
}
