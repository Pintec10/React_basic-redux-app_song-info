import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component {
	handleSongSelection = (song) => () => this.props.selectSong(song);

	renderList() {
		return (this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button 
						className="ui button primary"
						onClick={this.handleSongSelection(song)}>
							Select
						</button>
					</div>
					<div className="content">
							<div className="header">{song.title}</div>
							<div className="description">{song.artist}</div>
					</div>
				</div>
			);
		}));
	}


	render() {
		return <div className="ui divided list">
			{this.renderList()}
		</div>
	}
}


const mapStateToProps = state => {
	return {
		songs: state.songs
	};
}


export default connect(mapStateToProps, { selectSong })(SongList);