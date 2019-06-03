import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions.js';
import MainPage from '../components/MainPage.jsx';
import './App.css';

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

    render() {
        return (
            <MainPage  {...this.props} />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
