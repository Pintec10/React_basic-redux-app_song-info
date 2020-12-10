import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
	const renderNoSelection = () => {
		return <div>No song selected yet!</div>;
	}

	const renderSelectedSong = song => {
		return (
			<div>
				<h2>{song.title}</h2>
				<p><b>Artist: </b> {song.artist}</p>
				<p><b>Duration: </b> {song.duration}</p>
			</div>
		)
	}


	return (
		song ? renderSelectedSong(song)
			: renderNoSelection()
	);
};


const mapStateToProps = state => {
	return {
		song: state.selectedSong
	}
}


export default connect(mapStateToProps)(SongDetail);