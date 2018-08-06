// Contains the API call logic and fetch and stuff, and also has the HTML that actually organizes the display
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 24rem;
    padding: 2rem;
    border: 2px solid black;
    margin-bottom: 2rem;
`;

export const StyledImage = styled.img`
    height: 20rem;
    width: 100%;
    background-position: center;
    background-size: cover;
    margin-bottom: 1rem;
    border: 2px solid black;
`;

export const StyledLink = styled.a`
    text-decoration: none;
    &:visited {
        color: blue;
    }
`;

// ***************************
// This component use to be a stateless functional component but I turned it back to a class to use shouldComponentUpdate
// ***************************

export class RecipeDisplay extends Component {
    
    shouldComponentUpdate( nextProps ) {
        return this.props.recipe !== nextProps.recipe;
    }
    
    render(){
        return(
            <StyledDiv>
                <StyledImage style={{backgroundImage: 'url(' + this.props.recipe.imageUrl + ')' }} alt={''}/>
                <h2>{ this.props.recipe.recipeName }</h2>
                <p>{ this.props.recipe.calories } kcal</p>
                <StyledLink href={ this.props.recipe.recipeUrl } target="_blank">Go to source page</StyledLink>
            </StyledDiv>
        );
    }
}

RecipeDisplay.propTypes = {
    recipe: PropTypes.object
};