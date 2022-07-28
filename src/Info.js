import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
    render() {
        return (
            <div className="Info">
                <h2 className="InfoHeader">{this.props.name}</h2>
                <div className="InfoContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Info;