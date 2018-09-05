import React from 'react';
import '../components-css/contact.css';
import TypeWriter from 'react-typewriter';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <TypeWriter typing={1}>
          <h1 className="main-contact-header">Interested in collaborating?</h1>
            <h2 className="contact-header">{'Let\'s grab coffee (on me)!'}</h2>
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
          </TypeWriter>
      </div>
    )
  }
}
