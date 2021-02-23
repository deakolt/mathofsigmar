import { UPDATE_ATTACKS } from './actionTypes'

export const updateAttacks = attacks => ({
	type: UPDATE_ATTACKS,
	payload: {
		attacks: attacks
	}
})
