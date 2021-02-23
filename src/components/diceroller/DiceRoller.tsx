import React from 'react';

import MathForm from './MathForm';
import Chart from './Chart';

interface Props {

}

interface State {

}

class DiceRoller extends React.Component<State, Props> {
	constructor(props: any) {
		super(props);

		// this.setState({})
	}

	render() {
		return (
			<div>
				<MathForm />
				<Chart />
				hAhAA
			</div>
		)
	}
}

export default DiceRoller;
