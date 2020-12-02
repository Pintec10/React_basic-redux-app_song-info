import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{
			title: 'Kashmir',
			artist: 'Led Zeppelin',
			duration: '9:41'
		},
		{
			title: 'Echoes',
			artist: 'Pink Floyd',
			duration: '23:31'
		},
		{
			title: 'Interstate Love Song',
			artist: 'Stone Temple Pilots',
			duration: '3:14'
		},
		{
			title: 'Hallelujah',
			artist: 'Jeff Buckley',
			duration: '6:56'
		}
	]
}

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
}


export default combineReducers({
	songsReducer,
	selectedSongReducer
});