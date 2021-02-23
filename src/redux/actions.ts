import UPDATE_ATTACKS from './actionTypes'

export const updateAttacks = (attacks: number) => ({
	type: UPDATE_ATTACKS,
	payload: {
		attacks: attacks
	}
})
