import React from 'react';

interface Props {

}

interface State {
	count: number;
	rolls: object;
	total: number
}

class MathForm extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);

		this.state = { count: 0, rolls: {}, total: 0 }

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		let count: number = parseInt(event.target.value) || 0;
		if (count < 0) count = 0;
		else if (count > 1000) count = 1000;
		const { rolls, total } = this.rollDice(count);

		this.setState({ count: count, rolls: rolls, total: total });
	}

	getRandomDieRoll() : number {
		// 1-6
		return Math.floor(Math.random() * 5) + 1;
	}

	rollDice(count: number, rolls: any = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}, total: number = 0 ) : any {
		if (count === 0)  {
			return { rolls, total };
		}

		const roll: number = this.getRandomDieRoll();
		rolls[roll] = rolls[roll]++;

		return this.rollDice(count - 1, rolls, total + roll);
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
					Result: {this.state.total}
				</label>
			</form>
		);
	}
}

export default MathForm;
