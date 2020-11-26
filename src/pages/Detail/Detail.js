import React, { Component } from 'react'
import querystring from 'querystring';
import Header from '../../component/Header/header';
import { reqCateDetail } from '../../utils/https';
import DetailData from './components/info/detailData'
import './Detail.styl';
import Pinker from './components/picker/picker'
export default class Detail extends Component {
    constructor() {
        super();
        this.state = {
            detailArr: {},
            isshow:false
        }
        this.des = React.createRef();
    }
    componentDidMount() {
        let str = this.props.location.search;
        let result = querystring.parse(str.slice(1));
        reqCateDetail(result.id).then(res => {
            let list = res.data.list[0]
            list.specsattr = JSON.parse(list.specsattr)
            this.setState({
                detailArr: list
            }, () => {
                this.des.current.innerHTML = this.state.detailArr.description;
            })
        })
    }
    willAdd(){
        this.setState({
            isshow:!this.state.isshow
        })
    }
    hide(){
        this.setState({
            isshow:!this.state.isshow
        })
    }
    render() {
        let { detailArr ,isshow} = this.state;
        return (
            <div className='Detail'>
                <Header title='详情' back></Header>

                <img src={detailArr.img} alt="" />

                {detailArr.id ? <DetailData detaildata={detailArr}></DetailData> : null}
                <div ref={this.des}></div>

                {isshow==false?<div className='footer'>
                    <button className='btn' onClick={()=>this.willAdd()}>加入购物车</button>
                </div>:null}

                {detailArr.id&&isshow?<Pinker detail={detailArr} hide={()=>this.hide()}></Pinker>:null}
            </div>
        )
    }
}
