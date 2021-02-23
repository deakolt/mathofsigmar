import UPDATE_ATTACKS from '../actionTypes';

const initialState: object = {
	attacks: 1,
	bsws: 3,
	strength: 4,
	damage: 1,
	ap: -1,
	save: 3,
	toughness: 4,
	invulnerableSave: 0
};

export default function(state = initialState, action: any) {
	switch (action.type) {
		case UPDATE_ATTACKS: {
			console.log('combatStats reducer', action)
			const attacks: number = action.payload.attacks;
			console.log('combatStats attacks', attacks)
			return {
				...state,
				attacks: attacks
			}
		}

		default:
			return state;

	}
}
