import React from 'react';
import '../components-css/stats.css';
import Projects from './projects';

export default class Stats extends React.Component {
  render() {
    return (
      <div className="stats-container">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,800italic,400,700,800' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Raleway:400,700,300,200,100,900' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Amatic+SC:400,700' rel='stylesheet' type='text/css' />

        <h1 className="stats-header">Tools I like to work with...</h1>
        <br/>

        <ul id="categories" class="clr">
          <li class="pusher"></li>
        	<li>
              <div className="node-logo">
                <img src="https://s25.postimg.cc/4sz6p6533/Screen_Shot_2018-09-01_at_9.43.18_PM.png" alt=""/>
                <h1>Node JS</h1>
                <p>Proficiency Level: Advanced</p>
            </div>
          </li>
            <li>
              <div className="express-logo">
                <img src="https://s25.postimg.cc/yxnnajplr/Screen_Shot_2018-09-01_at_9.46.16_PM.png" alt=""/>
                <h1>Express</h1>
                <p>Proficiency Level: Advanced</p>
            </div>
          </li>
          <li>
              <div className="chai-logo">
                <img src="https://s25.postimg.cc/qdznynewf/Screen_Shot_2018-09-01_at_1.36.04_PM.png" alt=""/>
                <h1>Chai</h1>
                <p>Proficiency Level: Intermediate</p>
            </div>
          </li>
          <li>
              <div className="mocha-logo">
                <img src="https://s25.postimg.cc/6jdmcjujz/Screen_Shot_2018-09-01_at_1.37.29_PM.png" alt=""/>
                <h1>Mocha</h1>
                <p>Proficiency Level: Intermediate</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
              <div className="mongo-logo">
                <img src="https://s25.postimg.cc/4g7sj09yn/Screen_Shot_2018-09-01_at_9.50.17_PM.png" alt=""/>
                <h1>MongoDB</h1>
                <p>Proficiency Level: Advanced</p>
            </div>
          </li>

          <li>
              <div className="postgres-logo">
                <img src="https://s25.postimg.cc/rufruyf1b/Screen_Shot_2018-09-01_at_9.56.29_PM.png" alt=""/>
                <h1>PostgreSQL</h1>
                <p>Proficiency Level: Intermediate</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
              <div className="react-logo">
                <img src="https://s25.postimg.cc/joxpwuvy7/Screen_Shot_2018-09-01_at_9.59.27_PM.png" alt=""/>
                <h1>React</h1>
                <p>Proficiency Level: Advanced</p>
            </div>
          </li>
          <li>
              <div className="redux-logo">
                <img src="https://s25.postimg.cc/busixetj3/Screen_Shot_2018-09-01_at_1.56.14_PM.png" alt=""/>
                <h1>Redux</h1>
                <p>Proficiency Level: Advanced</p>
            </div>
          </li><li>
              <div className="javascript-logo">
                <img src="https://s25.postimg.cc/db8mtobnj/Screen_Shot_2018-09-01_at_10.07.54_PM.png" alt=""/>
                <h1>Javascript</h1>
                <p>Proficiency Level: Advanced</p>
            </div>
          </li>
          <li>
              <div className="mongoose-logo">
                <img src="https://s25.postimg.cc/i8hm0q3kv/Screen_Shot_2018-09-01_at_2.00.56_PM.png" alt=""/>
                <h1>Mongoose</h1>
                <p>Proficiency Level: Advanced</p>
            </div>
          </li>
          <li>
              <div className="jquery-logo">
                <img src="https://s25.postimg.cc/nzcdry8lr/Screen_Shot_2018-09-01_at_10.12.33_PM.png" alt=""/>
                <h1>JQuery</h1>
                <p>Proficiency Level: Beginner</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li class="pusher"></li>
          <li>
              <div className="sass-logo">
                <img src="https://s25.postimg.cc/6m23d65lr/Screen_Shot_2018-09-01_at_10.22.14_PM.png" alt=""/>
                <h1>Sass</h1>
                <p>Proficiency Level: Beginner</p>
            </div>
          </li>
          <li class="pusher"></li>
          <li>
              <div>
                <img src="https://i.postimg.cc/m2Lmz9q2/Screen_Shot_2018-09-26_at_7.27.39_PM.png" alt=""/>
                <h1>Java</h1>
                <p>Proficiency Level: Beginner</p>
            </div>
          </li>
          <li>
              <div>
                <img src="https://i.postimg.cc/rwvGJRh4/Screen_Shot_2018-09-26_at_7.28.56_PM.png" alt=""/>
                <h1>GraphQL</h1>
                <p>Proficiency Level: Beginner</p>
            </div>
          </li>
        </ul>
        <br/>
        <br/>
      </div>
    )
  }
}
