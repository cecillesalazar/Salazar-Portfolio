import React from 'react';
import '../components-css/contact.css';
import TypeWriter from 'react-typewriter';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
      <h1><TypeWriter typing={1}>Interested in collaborating?</TypeWriter></h1>
        <h2 className="contact-header">{'Let\'s grab coffee (on me)!'}</h2>
        <ul>
          <li className="contact-li">Slack: cecillesalazar</li>
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
        <h2 className="closing-quote">"Work and play are words used to describe the same thing under differing conditions."</h2>
        <h4 className="quote-author">Mark Twain</h4>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}
