import React, { Component } from 'react'
import Banner from './components/Banner/banner';
import Info from './components/Info/info';
import List from './components/List/list';
import Nav from './components/Nav/nav'
import {reqCateList} from '../../utils/https';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            navList: []
        }
    }
    componentDidMount(){
        reqCateList().then(res=>{
            this.setState({
                navList:res.data.list[0].content,
            })
            
        })
    }
    render() {
        let {navList} = this.state;
        return (
            <div>
                <Info></Info>
                <Banner></Banner>
                <Nav></Nav>
                <List data={navList}></List>
                
            </div>
        )
    }
}
