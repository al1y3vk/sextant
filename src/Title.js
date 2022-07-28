import React, { Component } from 'react';
import './Title.css';
import logo from './cisco-emblem.jpg';

class Title extends Component {
    render() {
        return (
          <div className="Include">
            <div className="Title">
                <h1>{this.props.titleText}</h1>
            </div>
            <div className="TitleImage">
              <img src={logo} alt="cisco_image" height="100%" width="100%"/>
            </div>
          </div>
        );
    }
}

export default Title;