import './App.css';
import React, { Component } from 'react';
import SearchForm from './sections/search-form';
import ResultContainer from './sections/results-container';
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showRecords: false,
			searchKeys: ''
		}
	}
	handleSearch = (search) => {
		this.setState({
			showRecords: search.showRecords,
			searchKeys: search.searchKeys
		});
	}
	render() {
		return (
			<div className='main-container'>
				<SearchForm
					onChangeSearch={this.handleSearch}
				/>
				<ResultContainer
					searchKeys={this.state.searchKeys}
					showRecords={this.state.showRecords}
				/>
			</div>
		);
	}

}


export default App;
