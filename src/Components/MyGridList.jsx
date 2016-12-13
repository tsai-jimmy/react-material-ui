/*引入React程式庫*/
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
/*引入React Mareail UI 元件程式庫*/
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import $ from 'jquery'

export class MyGridList extends Component {
	constructor(props) {
		super(props);
		this.state={
			issues: []
		};
	}

	componentDidMount() {
		$.get(this.props.source, function(result) {
			this.setState({issues: result['items']});
		}.bind(this));
	}
	render() {
		return(

			<GridList
			>
			{this.state.issues.map((tile) => (
				<GridTile
					key={tile.id}
					title={tile.title}
					subtitle={<span>by <b>{tile.author}</b></span>}
					actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
				>
					<img src={'https://placeimg.com/320/200/tech?'+ tile.id}/>
				</GridTile>
			))}
			</GridList>
		);
	}
}