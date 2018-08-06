// Display both the button and the recipe-display
import React, { Component } from 'react';
import { RecipeDisplay } from '../components/RecipeDisplay';
import { Button } from '../components/Button';

export class RecipeContainer extends Component {
    
    constructor( props ) {
        super( props );
        this.state = {
            imageUrl: 'Fetching data...',
            recipeName: 'Fetching data...',
            calories: 'Fetching data...',
            recipeUrl: 'Fetching data...',
            fetchedRecipes: {}
        }
        this.componentDidMount = this.componentDidMount.bind( this );
        this.showRandomRecipe = this.showRandomRecipe.bind( this );
    }

    componentDidMount() {
        fetch( 'https://api.edamam.com/search?q=&app_id=f425d620&app_key=74ceefee352cdcff9f84c292fefdac3f&health=vegetarian&diet=balanced&to=500' )
        .then( results => {
            return results.json();
        })
        .then( data => {
            this.setState({ fetchedRecipes: data.hits });
            this.showRandomRecipe();
        })
    }

    showRandomRecipe() {
        let index = Math.floor( Math.random() * this.state.fetchedRecipes.length );
        let randomRecipe = this.state.fetchedRecipes[index].recipe;
        this.setState({
            imageUrl: randomRecipe.image,
            recipeName: randomRecipe.label,
            calories: Math.round(randomRecipe.calories),
            recipeUrl: randomRecipe.url
        });
        console.log( 'THIS STATE' );
        console.log( this.state );
    }

    render() {
        return (
            <div>
                <RecipeDisplay recipe={ this.state }/>
                <Button onClick={ this.showRandomRecipe }/>
            </div>
        );
    }

}