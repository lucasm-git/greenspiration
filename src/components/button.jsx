// // displays the button that switches recipes
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledButton = styled.button`
    padding: 0.3rem 1.6rem;
    max-width: 10rem;
    border: 2px black solid;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: black;
        color: white;
    }
    &:focus {
        outline: none;
    }
`;

// ***************************
// As this components only is responsible for rendering something, I turned it into a STATELESS FUNCTIONAL COMPONENT
// ***************************

export const Button = props => {
    return <StyledButton onClick={ props.onClick }>New Recipe</StyledButton>;
}

Button.propTypes = {
    onClick: PropTypes.func
}