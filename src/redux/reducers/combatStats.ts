import {
	UPDATE_ATTACKS,
	UPDATE_BSWS,
	UPDATE_STRENGTH,
	UPDATE_DAMAGE,
	UPDATE_AP,
	UPDATE_TOUGHNESS,
	UPDATE_SAVE,
	UPDATE_INVULNERABLE_SAVE
} from '../actionTypes';

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
			const attacks: number = action.payload.attacks;
			return {
				...state,
				attacks: attacks
			}
		}
		case UPDATE_BSWS: {
			const bsws: number = action.payload.bsws;
			return {
				...state,
				bsws: bsws
			}
		}
		case UPDATE_STRENGTH: {
			const strength: number = action.payload.strength;
			return {
				...state,
				strength: strength
			}
		}
		case UPDATE_DAMAGE: {
			const damage: number = action.payload.damage;
			return {
				...state,
				damage: damage
			}
		}
		case UPDATE_AP: {
			const ap: number = action.payload.ap;
			return {
				...state,
				ap: ap
			}
		}
		case UPDATE_TOUGHNESS: {
			const toughness: number = action.payload.toughness;
			return {
				...state,
				toughness: toughness
			}
		}
		case UPDATE_SAVE: {
			const save: number = action.payload.save;
			return {
				...state,
				save: save
			}
		}
		case UPDATE_INVULNERABLE_SAVE: {
			const invulnerableSave: number = action.payload.invulnerableSave;
			return {
				...state,
				invulnerableSave: invulnerableSave
			}
		}


		default:
			return state;

	}
}
