import * as actionTypes from './actionTypes'

export const changelist= value =>({
	type:actionTypes.CHANGE_LIST,
	value:value
})

export const openModal= () =>({
	type:actionTypes.SHOW_MODAL
})

export const handleCancel= () =>({
	type:actionTypes.HIDE_MODAL
})

export const isLogin= value =>({
	type:actionTypes.IS_LOGIN,
	value:value
})

export const loginOut= value =>({
	type:actionTypes.LOGIN_OUT
})

export const getList= () =>{
	return (dispatch) => {	
		fetch('/api/header.json')
		.then(res => res.json())
		.then(res => {
			if(res && res.ret && res.data){
				const action=changelist(res.data.list)
				dispatch(action)
			}
		})
	}
}
