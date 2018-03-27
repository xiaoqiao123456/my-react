import { connect } from 'react-redux' 
import Detail from './component'
import * as actionCreator from './store/actionCreator'

const mapStateToProps = state => ({
	title:state.detail.title,
	date:state.detail.date,
	content:state.detail.content
})

const mapDispatchToProps = dispatch => ({
	changeList(data){
		const action = actionCreator.changedetail(data)
		dispatch(action)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Detail)