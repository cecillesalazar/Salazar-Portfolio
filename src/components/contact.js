import React from 'react';
import SocialMedia from './socialmedia';
import '../components-css/contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <section className="contact-headers">
          <h1 className="main-contact-header">Interested in collaborating?</h1>
          <h2 className="contact-header">{'Let\'s grab coffee (on me)!'}</h2>
        </section>
        <section className="contact-content-spacing">
            <br/>
            <ul>
              <li className="contact-li">Github: cecillesalazar</li>
              <li className="contact-li">Email: cecillersalazar@gmail.com</li>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <SocialMedia />
            <br/>
            <br/>
            <br/>
            <br/>
          </section>
      </div>
    )
  }
}
