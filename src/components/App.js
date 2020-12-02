import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
	return (
		<div>
			<h1 className="ui center aligned header">InfoMusic</h1>
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