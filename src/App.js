import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

//methods are called automatycaly by React. There are exact name of them.
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',			
		}
	}

	componentDidMount() {
		// FAKE API (it returns the result like 'robots.js')
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	// we use a func for using this. Without it this=SearchBox becase this module triggered the func. 
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render () {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		// Wait. Untill Robots will loaded from the API source.
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					{/*changing in search field will be trigger the function onSearchChange*/}				
					<SearchBox searchChange={this.onSearchChange}/>
					{/*filteredRobots is an new array*/}
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;