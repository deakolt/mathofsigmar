import React from 'react'
import { connect } from 'react-redux'

import { updateAttacks } from '../redux/actions'

interface Props {

}

interface State {
	attacks: number
}

class StatsForm extends React.Component<Props, State> {
	constructor() {
		super(props)

		this.state = { attacks: 0 }
	}

	handleUpdateAttacks = (event: any) => {
		this.props.updateAttacks(this.state.attacks)
	}

	render() {
		return (
			<form>
				<label>Attacks</label>
				<input type="number"
					   name="attacks"
					   value={this.state.attacks}
					   onChange={this.handleUpdateAttacks} />
			</form>
		)
	}
}

export default connect(
	null,
	{ updateAttacks }
)(StatsForm)
