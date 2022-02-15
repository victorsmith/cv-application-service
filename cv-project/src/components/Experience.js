import React from 'react';

const Experience = (props) => {
	const { workHistory } = props;
	return (
		<ul>
				{workHistory.map((job) => {
					return (
						<li key={job.id}>
							<div className='container'>
								<h4>{job.companyName}</h4>
								<h6>{job.position}</h6>
								<br></br>
								<h6>Start: {job.startDate}</h6>
								<h6>End: {job.endDate}</h6>
								<button>Delete</button>
							</div>
						</li>
					);
				})}
		</ul>
	);
};

export default Experience;
