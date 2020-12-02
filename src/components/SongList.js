import React, { Component } from 'react';
import { connect } from 'react-redux';


class SongList extends Component {
	renderList(list) {
		return (this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary">
							Select
						</button>
					</div>
					<div className="content">
							<div class="header">{song.title}</div>
							<div class="description">{song.artist}</div>
					</div>
				</div>
			)
		}))
	}

	render() {
		console.log(this.props);
		return <div className="ui divided list">
			{this.renderList()}
		</div>
	}
}

const mapStateToProps = state => {
	return {
		songs: state.songsReducer
	};
}


export default connect(mapStateToProps)(SongList);