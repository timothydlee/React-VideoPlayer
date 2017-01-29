import React, { Component } from 'react';

class SearchBar extends Component {
	//Only class based components have state. This syntax initializes state.`
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	render() {
		return (
			<div className='search-bar'>
				<input
					value={this.state.term}
					onChange={ e => this.onInputChange(e.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;

