import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAWzmGxKGtpveOqKC3EK_cBPksr6OES1cU';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('LeBron James');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			// this.setState({ videos });
			//same as this.setState({ videos: videos }) because the callback function uses "videos" which is the same name as the state key, which we also call "videos"
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={ videoSearch } />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } 
					videos={this.state.videos} />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));
