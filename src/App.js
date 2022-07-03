import React, { Component } from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: '',			
		}
	}
	// we use a func for using this. Without it this=SearchBox becase this module triggered the func. 
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render () {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				{/*changing in search field will be trigger the function onSearchChange*/}				
				<SearchBox searchChange={this.onSearchChange}/>
				{/*filteredRobots is an new array*/}
				<CardList robots={filteredRobots}/>
			</div>
		);
	}
}

export default App;