'use client'
import React from "react";

export class ClassSection extends React.Component {

	constructor(props) {
		super(props);

	}
	render() {
		// console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}Test</h1>

			</div>
		);
	}
}

export class SwiperSection extends ClassSection {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<>{super.render()}<h3>asdsad</h3></>
		)
	}
}