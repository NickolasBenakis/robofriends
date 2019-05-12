import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/searchBox.jsx';
import './App.css';
import Scroll from '../components/Scroll.jsx';
import { setSearchField } from '../actions.js';

const mapStateToProps = (state) => ({ searchField: state.searchField });
const mapDispatchToProps = (dispatch) => ({ onSearchChange: (event) => dispatch(setSearchField(event.target.value)) });

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;

        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        return (!robots.length) ?
            <h1 style={{ textAlign: "center" }}>Loading</h1> :
            (
                <div className="App">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
