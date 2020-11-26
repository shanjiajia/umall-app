import React, { Component } from 'react'
import './index.styl';
import {Switch,Redirect,Route,NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import Cate from '../Cate/Cate';
import Shop from '../Shop/Shop';
import Mine from '../Mine/Mine';
// import s from '../../assets/img'
import home_hig from "../../assets/img/tab_home_hig.png"
import home_nor from "../../assets/img/tab_home_nor.png"
import me_hig from "../../assets/img/tab_me_hig.png"
import me_nor from "../../assets/img/tab_me_nor.png"
import menu_hig from "../../assets/img/tab_menu_hig.png"
import menu_nor from "../../assets/img/tab_menu_nor.png"
import shopping_hig from "../../assets/img/tab_shopping_hig.png"
import shopping_nor from "../../assets/img/tab_shopping_nor.png"
// import asyncCom from '../../utils/asyncComponent'
export default class Index extends Component {
    constructor(){
        super();
        this.state={
            navs:[
                {
                    text: "首页",
                    selectImg: home_hig,
                    no_img: home_nor,
                    path: "/index/home"
                },
                {
                    text: "分类",
                    selectImg: menu_hig,
                    no_img: menu_nor,
                    path: "/index/cate"
                },
                {
                    text: "购物车",
                    selectImg: shopping_hig,
                    no_img: shopping_nor,
                    path: "/index/shop"
                },
                {
                    text: "我的",
                    selectImg: me_hig,
                    no_img: me_nor,
                    path: "/index/mine"
                }
            ]
        }
    }
    render() {
        console.log(this.props.location.pathname);
        return (
            <div className='index'>
                {/* 二级路由出口 */}
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/cate' component={Cate}></Route>
                    <Route path='/index/shop' component={Shop}></Route>
                    <Route path='/index/mine' component={Mine}></Route>
                    <Redirect to='/index/home'></Redirect>
                </Switch>
                <footer className='index-footer'>
                    {
                        this.state.navs.map(item=>{
                            return(
                                <NavLink to={item.path} key={item.path} activeClassName='select'>
                                    <img src={this.props.location.pathname===item.path?item.selectImg: item.no_img} alt=""/><br/>
                                    {item.text}
                                </NavLink>
                            )
                        })
                    }
                    {/* <NavLink to='/index/home' activeClassName='select'>首页</NavLink>
                    <NavLink to='/index/cate' activeClassName='select'>分类</NavLink>
                    <NavLink to='/index/shop' activeClassName='select'>购物车</NavLink>
                    <NavLink to='/index/mine' activeClassName='select'>我的</NavLink> */}
                </footer>
            </div>
        )
    }
}
