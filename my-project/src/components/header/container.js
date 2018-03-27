import { connect } from 'react-redux'
import component from './component'
import * as actionCreator from './store/actionCreator'

const mapStateToProps= (state) =>({
	list:state.header.list,
	showModal:state.header.showModal,
	Login:state.header.Login
})

const mapDispatchToprops= (dispatch) =>({
	openModal(){
		const action=actionCreator.openModal()
		dispatch(action)
	},
	handleCancel(){
		const action=actionCreator.handleCancel()
		dispatch(action)
	},
	isLogin(value){
		const action=actionCreator.isLogin(value)
		dispatch(action)
	},
	loginOut(){
		const action=actionCreator.loginOut()
		dispatch(action)
	},
	getList(){
		const action=actionCreator.getList()
		dispatch(action)		
	}
	
})

export default connect(mapStateToProps, mapDispatchToprops)(component)
