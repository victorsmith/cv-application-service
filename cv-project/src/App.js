import './App.css';
import React, { Component } from 'react';
import uniqid from 'uniqid';

// Components
import Header from './components/Header.js';
import EducationList from './components/EducationList.js';
import WorkList from './components/WorkList.js';
import PersonalData from './components/PersonalData.js';
class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	
	render() {
		return <div className='main'>
			<Header/>
			
			<div className='section'>
				<PersonalData/>
			</div>

			<div className='section'>
				<EducationList/>
			</div>

			<div className='section'>
				<WorkList/>
			</div>
		</div>
	}
	
}

export default App;
