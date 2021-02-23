import React from 'react';

interface Props {

}

interface State {
	simulations: number;
}

class Simulation extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);

		this.state = { simulations: 10 };

		this.handleChange = this.handleChange.bind(this);
	}

	private handleChange(event: any) {
		const newState: any = {}
		newState[event.target.name] = event.target.value;

		this.setState(newState);
	}

	render() {
		return (
			<div>
				<label>Number of Simulations</label>
				<input type="number"
					   name="simulations"
					   value={this.state.simulations}
					   onChange={this.handleChange} />
			</div>
		);
	}
}

export default Simulation;
