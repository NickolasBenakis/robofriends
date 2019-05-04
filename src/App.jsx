import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './searchBox.jsx';
import './App.css';
import Scroll from './Scroll.jsx';


export default class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        if (this.state.robots.length === 0) {
            return <h1 style={{ textAlign: "center" }}>Loading</h1>
        } else {
            return (
                <div className="App">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

