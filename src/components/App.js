import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
	return (
		<div className="ui container">
			<h1 className="ui center aligned header">Songs Info</h1>
			<br />
			<p>This is a very basic app which uses redux to store a list of songs and the currently selected song.</p>
			<br></br>
			<div className="ui container grid">
				<div className="ui row">
					<div className="column eight wide">
						<SongList />
					</div>
					<div className="column eight wide">
						<SongDetail />
					</div>
				</div>
			</div>
		</div>

	);
};


export default App;