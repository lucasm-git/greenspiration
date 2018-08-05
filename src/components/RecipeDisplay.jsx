// Contains the API call logic and fetch and stuff, and also has the HTML that actually organizes the display
import React from 'react';
import PropTypes from 'prop-types';


// ***************************
// As this components only is responsible for rendering something, I turned it into a STATELESS FUNCTIONAL COMPONENT
// ***************************

export const RecipeDisplay = props => {
    return(
        <div>
            <img src={ props.recipe.imageUrl } />
            <p>{ props.recipe.recipeName }</p>
            <p>{ props.recipe.calories }</p>
            <a href={ props.recipe.recipeUrl } target="_blank">Go to source page</a>
        </div>
    );
}

RecipeDisplay.propTypes = {
    recipe: PropTypes.object
};