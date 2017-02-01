/*引入React程式庫*/
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
/*引入React Mareail UI 元件程式庫*/
import Paper from 'material-ui/Paper';
/*
 *引入jQuery程式庫
 */
import $ from 'jquery'

export class MyPaper extends Component {
	constructor(props) {
		super(props);
		this.state={
			body: ''
		};
	}

	componentDidMount() {
		$(window).bind('postUpdate',function(event, title, body) {
			this.setState ({
				body: body
			});
		}.bind(this));
	}

	render() {
		return(

			<Paper
				zDepth={1}
			>
				<div dangerouslySetInnerHTML={{__html: this.state.body}} />
			</Paper>
		);
	}
}