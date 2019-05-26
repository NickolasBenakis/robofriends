import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/searchBox.jsx';
import './App.css';
import Header from '../components/Header';
import Scroll from '../components/Scroll.jsx';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = (state) => (
    {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
);
const mapDispatchToProps = (dispatch) => (
    {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
);

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;

        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        return (isPending) ?
            <h1 style={{ textAlign: "center" }}>Loading</h1> :
            (
                <div className="App">
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
