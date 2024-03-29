import React from 'react';
import './clearButton.css';

class ClearButton extends React.Component{
    render(){
        return(
            <div
                className = "clear-btn" onClick ={() => this.props.handleClear()}>{this.props.children}</div>
        )
    }
}

export default ClearButton;