import * as actionTypes from './actionTypes'

const defaultstate = {
	list:[]
}

export default (state = defaultstate, action) => {
	if(action.type === actionTypes.CHANGE_LIST){
		return {
			...state,
			list:action.value
		}
	}
	return state
}
