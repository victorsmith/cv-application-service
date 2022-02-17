const WorkEntry = (props) => {

    const { company, position, from, to } = props.info;


	return (
		<div>
			<h4>Company:</h4>
			<h6>{company}</h6>

			<h5>Position</h5>
			<h6>{position}</h6>

			<div>
				<h5>From:</h5>
				<h6>{from}</h6>

				<h5>To:</h5>
				<h6>{to}</h6>
			</div>
		</div>
	);
};

export default WorkEntry;
