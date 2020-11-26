import React, { Component } from 'react'
import Header from '../../component/Header/header';
import './register.styl'
import { Link } from "react-router-dom"
import { reqRegister } from '../../utils/https';
import { successAlert } from '../../utils/alert';
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                phone: '',
                nickname: '',
                password: ''
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }

        })
    }
    toLogin() {
        console.log(this.state.user)
        reqRegister(this.state.user).then(res=>{
            if(res.data.code===200){
                successAlert(res.data.msg)
            }
            
        })
        
    }
    render() {
        return (
            <div className='register'>
                <Header title='注册' back></Header>
                <div className='register-main'>
                    <div className='auto'>
                        <ul>
                            <li className='li'><span>手机号：</span><input type="text" onChange={(e) => this.changeUser(e, 'phone')} /></li>
                            <li className='li'>昵&nbsp;&nbsp;&nbsp;称：<input type="text" onChange={(e) => this.changeUser(e, 'nickname')} /></li>
                            <li className='li'>密&nbsp;&nbsp;&nbsp;码：<input type="text" onChange={(e) => this.changeUser(e, 'password')} /></li>
                        </ul>
                        <Link to='/login' className='btn' onClick={() => this.toLogin()}>注册</Link>
                    </div>

                </div>

            </div>
        )
    }
}
