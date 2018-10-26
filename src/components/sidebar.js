import React from 'react';
import '../components-css/sidebar.css';

export default class Sidebar extends React.Component {
  render() {
    return (
      <section className="sidebar">
        <div className="orange"></div><div className="green-right">
        </div><div className="blue-right">
        </div><div className="orange">
        </div><div className="red-right">
        </div><div className="blue">
        </div><div className="green">
        </div><div className="orange"></div>
      </section>
    )
  }
}
