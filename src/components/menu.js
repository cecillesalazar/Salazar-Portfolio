import React from 'react';
import '../components-css/menu.css';
import '../components-css/menu.scss';
import { showDashboard } from '../actions';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './dashboard';
import TypeWriter from 'react-typewriter';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.displayDashboard = this.displayDashboard.bind(this);
  }

  displayDashboard() {
    !this.props.showDashboard ? this.props.dispatch(showDashboard(true)) : ''
  }

  render() {
    if(this.props.showDashboard) {
      return <Dashboard />
    } else {
      return (
        <div className="menu-body">
          <div className="header-container">
            <h1 className="header"><TypeWriter typing={1}><strong><span style={{ fontSize: '130px'}}>Hi,</span><br/>{'I\'m Cecille.'}<br/>Nice to meet you.</strong></TypeWriter></h1>
          </div>
          <div className="flex">
            <button type="button" className="myButt one" onClick={() => this.displayDashboard()}>See my work</button>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  showDashboard: state.showDashboard
});

export default connect(mapStateToProps)(Menu);
