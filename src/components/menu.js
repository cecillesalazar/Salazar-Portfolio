import React from 'react';
import '../components-css/menu.css';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu-body">
        <img className="logo" src="https://s25.postimg.cc/tmobd6ypb/Logo_Makr_8by_J87.png" alt="portfolio logo"/>
        <div className="round">
          <a class="button" href="#">Open</a>
        </div>
      </div>
    )
  }
}
