import React, { Component } from 'react'
import axios from 'axios';

export class Drink extends Component {
        state = { 
            drinks: [],
            value: '',
            instructions: ''
        };
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const getDrink = this.state.drinks.find(drink => drink.strDrink === this.state.value);
        this.setState({instructions: getDrink.strInstructions})
    }
    
    componentDidMount(){
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => {
            const drinks = res.data.drinks;
            this.setState( { drinks})
        })
    }
    render() {
            const thisArray = [ 'I', 's', 'a', ' ', 'a', 'b', ' ', 'h', 'c', 'i', 'p', 'd', 'p', 'o', 'e', 'p', 'o', 'f', 't', 'a', 'g', 'm', 'u', 'h', 's', ' ', 'i', 'a', ' ', 'j', 'h', 'i', 'k', 'p', 'p', 'l', 'o', 'p', 'm', 'o', 't', 'n', 'a', 'm', 'o', 'u', 's', 'p', ' ', 'o', 'q', 'r', ' ', 'r', 'j', 'u', 's', 's', 't', 't', ' ', 'a', 'u', ' ', 'r', 'v', 'e', 'a', 'w', 'l', 'l', 'x', 'y', ' ', 'y', 'c', 'o', 'z', 'o', 'l', 'a', ' ', 'o', 'b', 'p', 'o', 'c', 't', 'a', 'd', 'm', 'u', 'e', 's', '?', 'f', ' ', '-', 'g', ' ', 'M', 'h', 'i', 't', 'i', 'c', 'h', 'j', ' ', 'H', 'k', 'e', 'd', 'l', 'b', 'e', 'm', 'r', 'g', 'n' ];

            const everyThird = (arr, nth) => arr.filter((e, i) => i % nth === nth -1);
            const newArray = everyThird(thisArray, 3).join('');
        return (
            <div>
                <h2>Margaritas</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your Drink: 
                <select value={this.state.value} onChange={this.handleChange}>
                    <option defaultValue="defaultValue"></option>
                    {this.state.drinks.map(drink => <option key={drink.idDrink}>{drink.strDrink}</option>)}
                </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <h3>Instructions:</h3>
                {this.state.instructions != null ? <p>{this.state.instructions} </p> : null}
                <hr/>
                <span>{newArray}</span>
            </div>
        );
    }
}

export default Drink
