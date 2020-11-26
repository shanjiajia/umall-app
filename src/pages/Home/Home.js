import React, { Component } from 'react'
import Banner from './components/Banner/banner';
import Info from './components/Info/info';
import List from './components/List/list';
import Nav from './components/Nav/nav';
import Header from '../../component/Header/header'
import {reqBanner, reqCateList, reqSeckill} from '../../utils/https';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            navList: [],
            bannerList :[],
            secKillList:[]
        }
    }
    componentDidMount(){
        reqCateList().then(res=>{
            this.setState({
                navList:res.data.list[0].content,
            }) 
        })
        reqBanner().then(res=>{
            this.setState({
                bannerList:res.data.list
            })
        })
    }
    render() {
        let {navList,bannerList,secKillList} = this.state;
        return (
            <div>
                <Header title='首页'></Header>
                <Info></Info>
                {bannerList.length>0?<Banner bannerList={bannerList}></Banner>:null}
                <Nav secKillList={secKillList}></Nav>
                <List data={navList}></List>
                
            </div>
        )
    }
}
