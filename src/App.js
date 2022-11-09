import React, { Component } from 'react';
import CardList from './CardList.js';
import Searchbox, { searchfield } from './Searchbox.js';
import Scroll from './scroll.js';


class App extends Component {
    constructor() {
        super()
        this.state = {
            bots: [],
            searchfield: '' 
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ bots: users })});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {

        const filterBots = this.state.bots.filter(bots => {
            return bots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
         });
         if (this.state.bots.length === 0) {
            return <h1 className='tc'>Loading...</h1>
         } else {
            return (
                <div className='tc'>
                <h1 className='f2'>ROBO FRIENDS</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList bots={filterBots}/>
                </Scroll>
                </div>
            );
         }
    }
}


export default App;