// Contains the API call logic and fetch and stuff, and also has the HTML that actually organizes the display
import React, { Component } from 'react';
import PropTypes from 'prop-types';


// ***************************
// As this components only is responsible for rendering something, I turned it into a STATELESS FUNCTIONAL COMPONENT
// ***************************

export class RecipeDisplay extends Component {

    constructor( props ) {
        super( props );
    }
    
    shouldComponentUpdate( nextProps ) {
        return this.props.recipe != nextProps.recipe;
    }
    
    render(){
        return(
            <div>
                <img src={ this.props.recipe.imageUrl } alt={ this.props.recipe.recipeName } />
                <p>{ this.props.recipe.recipeName }</p>
                <p>{ this.props.recipe.calories } kcal</p>
                <a href={ this.props.recipe.recipeUrl } target="_blank">Go to source page</a>
            </div>
        );
    }
}

RecipeDisplay.propTypes = {
    recipe: PropTypes.object
};