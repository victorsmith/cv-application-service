import React, { Component } from 'react';

class EducationEntry extends Component {
	render() {
		const { school, subject, from, to } = this.props.info;

		return <div> 
            <h1>Hey</h1>
            <h1>{school}</h1>
            <h1>{subject}</h1>
            <h1>{from}</h1>
            <h1>{to}</h1>
        </div>
        ;
	}
}

export default EducationEntry;
