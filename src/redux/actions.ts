import {
	UPDATE_ATTACKS,
	UPDATE_BSWS,
	UPDATE_STRENGTH,
	UPDATE_DAMAGE,
	UPDATE_AP,
	UPDATE_TOUGHNESS,
	UPDATE_SAVE,
	UPDATE_INVULNERABLE_SAVE
} from './actionTypes';

export const updateAttacks = (attacks: number) => ({
	type: UPDATE_ATTACKS,
	payload: {
		attacks: attacks
	}
})

export const updateBsws = (bsws: number) => ({
	type: UPDATE_BSWS,
	payload: {
		bsws: bsws
	}
})

export const updateStrength = (strength: number) => ({
	type: UPDATE_STRENGTH,
	payload: {
		strength: strength
	}
})

export const updateDamage = (damage: number) => ({
	type: UPDATE_DAMAGE,
	payload: {
		damage: damage
	}
})

export const updateAp = (ap: number) => ({
	type: UPDATE_AP,
	payload: {
		ap: ap
	}
})

export const updateToughness = (toughness: number) => ({
	type: UPDATE_TOUGHNESS,
	payload: {
		toughness: toughness
	}
})

