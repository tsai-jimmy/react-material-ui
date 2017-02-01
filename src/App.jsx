/*引入React程式庫*/
import React from 'react';
import {render} from 'react-dom';
/*引入React Mareail UI 元件程式庫*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MyAppBar } from './Components/MyAppBar';
import { MyGridList } from './Components/MyGridList';
import { MyPaper } from './Components/MyPaper';

const muiTheme = getMuiTheme();

/*
 *引入jQuery程式庫
 */
import $ from 'jquery'


/*
 *Global event System
 *
*/

const handleClick = (title,body) => {
	// console.log('Title:', title);
	$(window).trigger('postUpdate', [title,body]);
};


const App = () => (
	<MuiThemeProvider muiTheme={muiTheme} >
		<div>
			<MyAppBar />
			<MyPaper />
			<MyGridList
				handleClick={handleClick}
				source="https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ftsai-jimmy.logdown.com%2Fposts.rss"
				cellHeight="200"
			/>
		</div>
	</MuiThemeProvider>
);


render(
	<App />,
	document.getElementById('content')
);