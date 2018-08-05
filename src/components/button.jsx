// // displays the button that switches recipes
import React from 'react';
import PropTypes from 'prop-types';



// ***************************
// As this components only is responsible for rendering something, I turned it into a STATELESS FUNCTIONAL COMPONENT
// ***************************

export const Button = props => {
    return <button onClick={ props.onClick }>New Recipe</button>;
}

Button.propTypes = {
    onClick: PropTypes.func
}