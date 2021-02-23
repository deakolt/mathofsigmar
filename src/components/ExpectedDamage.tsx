import React from 'react';

interface Props {

}

interface State {
	attacks: number;
	bsws: number;
	strength: number;
	damage: number;
	ap: number;
	toughness: number;
	save: number;
	invulnerableSave: number;
	expectedHits: number;
	expectedDamage: number;
}

const defaultState: any = {
	attacks: 1,
	bsws: 3,
	strength: 4,
	damage: 1,
	ap: -1,
	save: 3,
	toughness: 4,
	invulnerableSave: 0
}

class ExpectedDamage extends React.Component<Props, State> {
	private DECIMAL_PLACES: number = 3;

	constructor(props: any) {
		super(props);

		this.state = defaultState;

		this.calculateExpectedDamage = this.calculateExpectedDamage.bind(this);
		this.calculateExpectedHits = this.calculateExpectedHits.bind(this);
		this.calculateExpectedWounds = this.calculateExpectedWounds.bind(this);
		this.calculateWoundTarget = this.calculateWoundTarget.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.round = this.round.bind(this);
	}

	private calculateExpectedHits() {
		const expectedWounds: number = this.calculateExpectedWounds();

		const save: number = this.calculateSave();
		let expectedHits: number;
		if (save === 0) {
			expectedHits = expectedWounds;
		} else {
			expectedHits = expectedWounds * save/6;
		}

		return expectedHits;
	}

	private calculateExpectedDamage(expectedHits: number): number {
		const expectedDamage: number = expectedHits * this.state.damage;

		return expectedDamage;
	}

	private calculateExpectedWounds() {
		const woundTarget: number = this.calculateWoundTarget();
		return this.state.attacks * this.state.bsws/6 * woundTarget/6;
	}

	private calculateSave() {
		const apSave: number = this.state.save + this.state.ap;
		let save: number;
		if (this.state.invulnerableSave === 0) {
			save = apSave > 6 ? 0 : apSave;
		} else {
			save = this.state.invulnerableSave > apSave ? apSave : this.state.invulnerableSave;
		}

		return save;
	}

	private calculateWoundTarget(): number {
		const strengthDiff: number = this.state.strength - this.state.toughness;
		if (strengthDiff >= this.state.toughness * 2) {
			return 2;
		} else if (strengthDiff > this.state.toughness) {
			return 3;
		} else if (strengthDiff === this.state.toughness) {
			return 4;
		} else if (strengthDiff * 2 === this.state.toughness) {
			return 6;
		} else if (strengthDiff < this.state.toughness) {
			return 5;
		}

		return -1; // something is wrong here
	}

	private round(number: number) {
		// algorithm from https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
		const modifier: number = 10**this.DECIMAL_PLACES;

		return Math.round((number + Number.EPSILON) * modifier) / modifier;
	}

	private handleChange(event: any) {
		const newState: any = {}
		newState[event.target.name] = event.target.value;

		this.setState(newState);

		const expectedHits: number = this.calculateExpectedHits();
		const expectedDamage: number = this.calculateExpectedDamage(expectedHits);

		this.setState({ expectedHits: expectedHits, expectedDamage: expectedDamage });
	}

	render() {
		return (
			<form>
				<label>Attacks</label>
				<input type="number"
					   name="attacks"
					   value={this.state.attacks}
					   onChange={this.handleChange} />

				<label>WS/BS</label>
				<input type="number"
					   name="bsws"
					   value={this.state.bsws}
					   onChange={this.handleChange} />

				<label>Strength</label>
				<input type="number"
					   name="strength"
					   value={this.state.strength}
					   onChange={this.handleChange} />

				<label>Damage</label>
				<input type="number"
					   name="damage"
					   value={this.state.damage}
					   onChange={this.handleChange} />

				<label>AP</label>
				<input type="number"
					   name="ap"
					   value={this.state.ap}
					   onChange={this.handleChange} />

				<label>Toughness</label>
				<input type="number"
					   name="toughness"
					   value={this.state.toughness}
					   onChange={this.handleChange} />

				<label>Save</label>
				<input type="number"
					   name="save"
					   value={this.state.save}
					   onChange={this.handleChange} />

				<label>Invulnerable Save</label>
				<input type="number"
					   name="invulnerableSave"
					   value={this.state.invulnerableSave}
					   onChange={this.handleChange} />

				<b>Expected Number of Hits: {this.round(this.state.expectedHits)}</b>
				<b>Expected Damage: {this.round(this.state.expectedDamage)}</b>
			</form>
		);
	}
}


export default ExpectedDamage;