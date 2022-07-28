import React, { Component } from 'react';
import './SplitPane.css';

class SplitPane extends Component {
    render() {
        return (
            <div className="SplitPane">
                <div className="SplitPane-left">
                    <div className='CName'>

                    </div>
                </div>
                <div className="SplitPane-right">
                    <div className='Comp'>

                    </div>
                </div>
            </div>
        );
    }
}

export default SplitPane;