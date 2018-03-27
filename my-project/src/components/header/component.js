import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Menu, Icon, Button, Modal, Form, Input } from 'antd'
import styles from './style.mcss'
const FormItem = Form.Item;

class Header extends Component {	
	render(){
		const { getFieldDecorator } = this.props.form;
		const logo = require('../../assets/imgs/logo.png')
		const menuItem = this.props.list
						.map((item,index)=>{
					return (
						<Menu.Item key={item.id} className={styles.item}>
					        <Icon type="appstore" />{item.title}
					    </Menu.Item>
					)
		})		
		
		let button=null;
		if (this.props.Login){
			button = <Button type="primary" onClick={this.props.loginOut}>退出</Button>
		}else {
			button = <Button type="primary" onClick={this.props.openModal}>登录</Button>
		}
		
		return (
			<div>
				<div>				
					<Row>
				    	<Col span={4}>
				      		<img src={logo} alt="logo" className={styles.logo} onClick={this.handleClick.bind(this)} />
				    	</Col>
				    	<Col span={18}>
					      	<Menu mode="horizontal">
						        {menuItem}
						        				        
						    </Menu>
					    </Col>
					    <Col span={2}>
					    	{button}
					    </Col>
				    </Row>
				    <Modal
			        title="登录"
			        cancelText="取消"
			        okText="登录"
			        visible={this.props.showModal}
			        onOk={this.handleOk.bind(this)}
			        onCancel={this.props.handleCancel}
			        >
				        <Form>
				        	<FormItem>
					          {getFieldDecorator('userName', {
					            rules: [{ required: true, message: '请填写用户名' }],
					          })(
					            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
					          )}
					        </FormItem>
					        <FormItem>
					          {getFieldDecorator('password', {
					            rules: [{ required: true, message: '请填写密码' }],
					          })(
					            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
					          )}
					        </FormItem>
				        </Form>
			        </Modal>
			    </div>
			</div>
		);
	}
	
	componentDidMount(){
		this.props.getList()
		/*if(!this.props.list.length>0){		
			fetch('/api/header.json')
				.then(res => res.json())
				.then(res => {
				if(res && res.ret && res.data){
					this.props.changelist(res.data.list)
				}
			})
		}*/
	}
	
	handleClick(){
		this.props.history.push('/')
	}
	
	handleOk(){
		this.props.form
			.validateFields((err, values) => {
		    if (!err) {
		        fetch('/api/login.json')
		        .then(res => res.json())
		        .then(res => {
		        	if(res && res.ret && res.data){
		        		this.props.isLogin(res.data.login)
		        	}
		        })
		    }
	   });
	}
	
}

export default Form.create()(Header)