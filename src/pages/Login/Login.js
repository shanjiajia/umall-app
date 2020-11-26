import React, { Component } from 'react'
import Header from '../../component/Header/header';
import { reqLogin } from '../../utils/https';
import './login.styl'
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                phone: '',
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
    toIndex() {
        reqLogin(this.state.user).then(res => {
            if (res.data.code === 200) {
                sessionStorage.setItem('userInfo', JSON.stringify(res.data.list))
                this.props.history.push('/index')
            }

        })
    }
    render() {
        return (
            <div className='login'>
                <Header title='登录' register></Header>
                <div className='login-main'>
                    <ul>
                        <li className='li'><span>账号：</span><input type="text" onChange={(e) => this.changeUser(e, 'phone')} /></li>
                        <li className='li'><span>密码：</span><input type="text" onChange={(e) => this.changeUser(e, 'password')} /></li>
                    </ul>
                    <a className='mima'>忘记密码</a>
                    <a className='btn' onClick={() => this.toIndex()}>登录</a>
                </div>
            </div>
        )
    }
}
