// Display both the button and the recipe-display
import React, { Component } from 'react';
import { RecipeDisplay } from '../components/RecipeDisplay';
import { Button } from '../components/Button';

export class RecipeContainer extends Component {
    
    constructor( props ) {
        super( props );
        this.state = {
            recipe: {
                imageUrl: '',
                recipeName: '',
                calories: '',
                url: ''
            },
            fetchedRecipes: {}
        }
        this.componentWillMount = this.componentWillMount.bind( this );
        this.showRandomRecipe = this.showRandomRecipe.bind( this );
    }

    componentWillMount() {
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
        this.setState({
            imageUrl: this.state.fetchedRecipes[index].recipe.image,
            recipeName: this.state.fetchedRecipes[index].recipe.label,
            calories: Math.round(this.state.fetchedRecipes[index].recipe.calories),
            recipeUrl: this.state.fetchedRecipes[index].recipe.url
        });
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