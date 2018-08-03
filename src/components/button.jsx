// displays the button that switches recipes
import React, { Component } from 'react';

export class Button extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return <button onClick={ this.props.onClick }>New Recipe</button>;
    }
    
}