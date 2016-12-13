/*引入React程式庫*/
import React from 'react';
import {render} from 'react-dom';
/*引入React Mareail UI 元件程式庫*/
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export const MyAppBar = () => (
	<AppBar
		iconElementRight={
			<IconMenu 
				iconButtonElement={
					<IconButton><MoreVertIcon/></IconButton>
				}
			>
				<MenuItem primaryText="Help" />
			</IconMenu>
		}
		title="App"
	/>
);