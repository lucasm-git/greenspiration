// Contains the API call logic and fetch and stuff, and also has the HTML that actually organizes the display
import React, { Component } from 'react';

export class RecipeDisplay extends Component {

    constructor( props ){
        super( props );
    }

    render() {
        return(
            <div>
                <img src={ this.props.recipe.imageUrl } />
                <p>{ this.props.recipe.recipeName }</p>
                <p>{ this.props.recipe.calories }</p>
                <a href={ this.props.recipe.recipeUrl } target="_blank">Go to source page</a>
            </div>
        );
    }

};