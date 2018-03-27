import React, { Component } from 'react' 
import { Card } from 'antd';

export default class Detail extends Component {
	
	componentWillReceiveProps(nextProps){
		if(nextProps.match.params.id !== this.props.match.params.id){
			this.getdetail(nextProps.match.params.id)
		}
		
	}
	
	render(){
		const title=this.props.title + "(" + this.props.date + ")"
		return (
			<div>
				<Card title={title} style={{ marginTop: 15 }}>
				    <div dangerouslySetInnerHTML={{__html:this.props.content}}></div>
				</Card>
			</div>
		)		
	}
	
	componentDidMount() {
		this.getdetail(this.props.match.params.id)
	}
	
	getdetail(id){
		fetch('/api/detail.json?id=' + id)
			.then(res => res.json())
			.then(res => {
			if( res && res.ret && res.data ){
				this.props.changeList(res.data)					
			}
		})
	}
	
}
