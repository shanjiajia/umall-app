import React, { Component } from 'react'
import Header from '../../component/Header/header'
import { reqCateLists } from '../../utils/https';
import List1 from '../Home/components/List/list'
export default class List extends Component {
    constructor(){
        super();
        this.state={
            listArr:[]
        }
    }
    componentDidMount(){
        reqCateLists(this.props.match.params.id).then(res=>{
            this.setState({
                listArr:res.data.list
            })
        })
    }
    render() {
        let {listArr} = this.state;
        let {name} = this.props.match.params
        return (
            <div>
                <Header title={name} back></Header>
                <List1 data={listArr}></List1>
            </div>
        )
    }
}
