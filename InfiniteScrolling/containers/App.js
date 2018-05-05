import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


export default class App extends Component {
  goToTop() {
    $(document).scrollTop(0)
  }

  render() {
    return (
      <div>
       <style>
        {require("!css!resolve-url!sass!../sass/layout.scss")}
      </style>
      <div className="main-container">
        <div className="header">
        <div className="page-header">
            <h1>Google+ <small> Activities Application</small></h1>
      </div>
        </div>
        <div className="menu">
        <ul>
         <li><Link to={ '/app' } activeClassName="selected">Search</Link></li>
         <li><Link to={ '/profiles' } activeClassName="selected">Profiles</Link></li>
         </ul>
        </div>
        <div className="container">
			   
        
          <a className="goto-top" onClick={this.goToTop}></a>
          {this.props.children}
        </div>
      </div>
      </div>
    )
  }
}

