import * as actionTypes from './actionTypes'

const defaultstate = {
	list:[],
	showModal:false,
	Login:false
}

export default (state=defaultstate,action)=>{
	if(action.type === actionTypes.CHANGE_LIST){
		return {
			...state,
			list:action.value
		}
	}
	if(action.type === actionTypes.SHOW_MODAL){
		return {
			...state,
			showModal:true
		}
	}
	if(action.type === actionTypes.HIDE_MODAL){
		return {
			...state,
			showModal:false
		}
	}
	if(action.type === actionTypes.IS_LOGIN){
		return {
			...state,
			showModal:false,
			Login:action.value
		}
	}
	if(action.type === actionTypes.LOGIN_OUT){
		return {
			...state,
			showModal:false,
			Login:false
		}
	}
	return state	
}
