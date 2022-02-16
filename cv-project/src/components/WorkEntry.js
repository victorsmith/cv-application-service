import React, { Component } from 'react';

class WorkEntry extends Component {
	render() {
		const { company, position, from, to } = this.props.info;

		return <div> 
            <h1>Hey</h1>
            <h1>{company}</h1>
            <h1>{position}</h1>
            <h1>{from}</h1>
            <h1>{to}</h1>
        </div>
        ;
	}
}

export default WorkEntry;
