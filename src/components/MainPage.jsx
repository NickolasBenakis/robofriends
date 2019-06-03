import React, { Component } from 'react';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import './MainPage.css';
import Header from '../components/Header';
import Scroll from '../components/Scroll.jsx';


class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filteredRobots = () => {
        return this.props.robots.filter(robot => robot.name.toLowerCase()
            .includes(this.props.searchField.toLowerCase()));

    }
    render() {
        const { onSearchChange, isPending } = this.props;

        return (isPending) ?
            <h1 style={{ textAlign: "center" }}>Loading</h1>
            :
            (
                <div className="App">
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={this.filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}


export default MainPage;
