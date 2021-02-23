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

export default function(state = initialState, action) {
	switch (action.type) {
		case UPDATE_ATTACKS: {
			const attacks: name = action.payload;

			return {
				...state,
				attacks: attacks
			}
		}

		default:
			return state;

	}
}

