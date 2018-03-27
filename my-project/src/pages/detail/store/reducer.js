import * as actionTypes from './actionTypes'

const defaultstate = {		
		title: "",
		date: "",
		content: ""
}

export default (state = defaultstate, action) => {
	if(action.type === actionTypes.CHANGE_DETAIL){
		return {
			...state,
			title:action.title,
			date:action.date,
			content:action.content
		}
	}
	return state
}
