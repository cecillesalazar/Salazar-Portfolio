import React from 'react';
import '../components-css/menu.css';
import '../components-css/menu.scss';
import { showDashboard } from '../actions';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './dashboard';

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
          <img className="logo" src="https://s25.postimg.cc/tmobd6ypb/Logo_Makr_8by_J87.png" alt="portfolio logo"/>
          <div className="flex">
            <button type="button" className="myButt one" onClick={() => this.displayDashboard()}>Open</button>
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
