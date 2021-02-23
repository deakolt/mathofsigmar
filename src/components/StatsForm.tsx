import React from 'react'
import { connect } from 'react-redux'

import { updateAttacks } from '../redux/actions'

interface Props {
	attacks: number
	updateAttacks: any
}

interface State {
	attacks: number
}

const mapStateToProps = (state: any) => {
	console.log('state in MapStateToProps', state);
	const attacks: number = state['combatStats']['attacks'];
	return { attacks };
}

class StatsForm extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);

		this.state = { attacks: 0 };
	}

	handleUpdateAttacks = (event: any) => {
		this.props.updateAttacks(this.state.attacks);
	}

	updateAttacks = (attacks: any) => {
		console.log('updateAttacks', attacks)
		this.setState({ attacks })
		this.props.updateAttacks(attacks);
	}

	render() {
		return (
			<form>
				<label>Attacks</label>
				<input type="number"
					   name="attacks"
					   value={this.props.attacks}
					   onChange={e => this.updateAttacks(e.target.value)} />
			</form>
		)
	}
}

export default connect(
	mapStateToProps,
	{ updateAttacks }
)(StatsForm);
