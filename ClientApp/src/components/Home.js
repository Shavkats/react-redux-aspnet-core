import React, { Component } from 'react';
import './Home.css'
import cs from './cs.jpg'

class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div className="main">
          <h2>BSc in Software Engineering</h2>
          <h3>Course Management</h3>
          <img src={cs} alt="cs department"/>
        </div>
    );
  }
}
export default Home;
