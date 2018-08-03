// Display both the button and the recipe-display
import React, { Component } from 'react';
import { RecipeDisplay } from './recipe-display';
import { Button } from './button';

export class MainDisplay extends Component {
    
    constructor( props ) {
        super( props );
        this.state = {
            recipe: {
                imageUrl: '',
                recipeName: '',
                calories: '',
                url: ''
            }
        }
        this.componentWillMount = this.componentWillMount.bind( this );
    }

    componentWillMount() {
        fetch( 'https://api.edamam.com/search?q=&app_id=f425d620&app_key=74ceefee352cdcff9f84c292fefdac3f&health=vegetarian&diet=balanced&to=100' )
        .then( results => {
            return results.json();
        })
        .then( data => {
            console.log( data.hits );
            let index = Math.floor( Math.random() * data.hits.length );
            this.setState({
                imageUrl: data.hits[index].recipe.image,
                recipeName: data.hits[index].recipe.label,
                calories: data.hits[index].recipe.calories,
                recipeUrl: data.hits[index].recipe.url
            });
            console.log( this.state );
        })
    }

    render() {
        return (
            <div>
                <RecipeDisplay recipe={ this.state }/>
                <Button onClick={ this.componentWillMount }/>
            </div>
        );
    }

}