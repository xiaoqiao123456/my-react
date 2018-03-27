import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd';
import styles from './style.mcss'

export default class Home extends Component {
	render(){			
		return (
			<div>
				<List
				header={<div>Voa 英文学习</div>}
				className={styles.wrap}
				bordered={true}
			    itemLayout="horizontal"
			    dataSource={this.props.list}
			    renderItem={item => (
			      <List.Item>
			        <List.Item.Meta
			          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
			          title={<Link to={'/detail/' + item.id}>[{item.category}] {item.title} ({item.date})</Link>}
			          description={item.desc}
			        />
			      </List.Item>
			    )}
			  />
			</div>
		)
		
	}
	
	componentDidMount() {
		fetch('/api/home.json')
			.then(res => res.json())
			.then(res => {
				if( res && res.ret && res.data ){
					this.props.changeList(res.data.list)
					
				}
			})
	}
	
}
