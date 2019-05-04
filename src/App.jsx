import React, { Component } from 'react';
import CardList from './CardList.js';
import { robots } from './robots.js';
import SearchBox from './searchBox.jsx';
import './App.css';

// const state = {
//     robots: robots,
//     searchField: ''
// }

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };

    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        return (
            <div className="App">
                <h1 className="f2">RoboFriends</h1>
                <hr />
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

