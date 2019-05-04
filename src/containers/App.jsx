import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/searchBox.jsx';
import './App.css';
import Scroll from '../components/Scroll.jsx';


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
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        return (!robots.length) ?
            <h1 style={{ textAlign: "center" }}>Loading</h1> :
            (
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



