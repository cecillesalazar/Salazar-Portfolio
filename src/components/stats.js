import React from 'react';
import '../components-css/stats.css';

export default class Stats extends React.Component {
  render() {
    return (
      <div>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,800italic,400,700,800' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Raleway:400,700,300,200,100,900' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Amatic+SC:400,700' rel='stylesheet' type='text/css' />

        <h1>What I like to work with...</h1>
        <br/>

        <ul id="categories" class="clr">
          <li class="pusher"></li>
        	<li>
              <div className="node-logo">
                <img src="https://s25.postimg.cc/5skw74uv3/Node_Logo.jpg" alt=""/>
                <h1>This is a title a bit longer</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
            <li>
              <div className="express-logo">
                <img src="https://s25.postimg.cc/7kdv251e7/Screen_Shot_2018-09-01_at_1.27.05_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
              <div className="chai-logo">
                <img src="https://s25.postimg.cc/qdznynewf/Screen_Shot_2018-09-01_at_1.36.04_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
              <div className="mocha-logo">
                <img src="https://s25.postimg.cc/6jdmcjujz/Screen_Shot_2018-09-01_at_1.37.29_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
              <div className="mongo-logo">
                <img src="https://s25.postimg.cc/x4g586hin/Screen_Shot_2018-09-01_at_1.43.59_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>

          <li>
              <div className="postgres-logo">
                <img src="https://s25.postimg.cc/om6p3uqfj/Screen_Shot_2018-09-01_at_1.48.13_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
              <div className="react-logo">
                <img src="https://s25.postimg.cc/4et9blqe7/Screen_Shot_2018-09-01_at_1.54.04_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
              <div className="redux-logo">
                <img src="https://s25.postimg.cc/busixetj3/Screen_Shot_2018-09-01_at_1.56.14_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li><li>
              <div className="javascript-logo">
                <img src="https://s25.postimg.cc/kptd7xxr3/Screen_Shot_2018-09-01_at_1.58.13_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
              <div className="mongoose-logo">
                <img src="https://s25.postimg.cc/i8hm0q3kv/Screen_Shot_2018-09-01_at_2.00.56_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li>
              <div className="jquery-logo">
                <img src="https://s25.postimg.cc/mudq9474f/Screen_Shot_2018-09-01_at_2.05.06_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li class="pusher"></li>
          <li>
              <div className="sass-logo">
                <img src="https://s25.postimg.cc/xtyxkqcz3/Screen_Shot_2018-09-01_at_2.07.21_PM.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
