import React from 'react';

interface Props {

}

interface State {
	count: number;
	result: number | undefined;
}

class MathForm extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);

		this.state = { count: 0, result: 0 }

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		let count: number = parseInt(event.target.value) || 0;
		if (count < 0) count = 0;
		else if (count > 1000) count = 1000;
		let result = this.rollDice(count);

		this.setState({ count: count, result: result });
	}

	getRandomDieRoll() : number {
		return Math.floor(Math.random() * 5) + 1;
	}

	rollDice(count: number, result?: number ) : any {
		if (result === undefined) result = 0;

		if (count === 0)  {
			return result;
		}

		return this.rollDice(count - 1, result + this.getRandomDieRoll());
	}

	render() {
		return (
			<form>
				<label>
					Number of Dice (Max 1000):
					<input type="number"
						   name="count"
						   value={this.state.count}
						   onChange={this.handleChange}
					/>
				</label>
				<label>
					Result: {this.state.result}
				</label>
			</form>
		);
	}
}

export default MathForm;