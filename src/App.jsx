/*引入React程式庫*/
import React from 'react';
import {render} from 'react-dom';
/*引入React Mareail UI 元件程式庫*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MyAppBar } from './Components/MyAppBar';
import { MyGridList } from './Components/MyGridList';

const muiTheme = getMuiTheme();

const App = () => (
	<MuiThemeProvider muiTheme={muiTheme} >
		<div>
			<MyAppBar/>
			<MyGridList
				source="https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fyi-min-cai-blog.logdown.com%2Fposts.rss"
				celheight={200}
			/>
		</div>
	</MuiThemeProvider>
);


render(
	<App />,
	document.getElementById('content')
);