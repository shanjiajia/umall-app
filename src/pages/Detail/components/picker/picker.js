import React, { Component } from 'react'
import { successAlert } from '../../../../utils/alert';
import { reqCarAdd } from '../../../../utils/https';
import './picker.styl'
export default class picker extends Component {
    constructor(){
        super();
        this.state={
            n:0
        }
    }
    changeN(index){
        this.setState({
            n:index
        })
    }
    add(){
        let form = {
            uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
            goodsid:this.props.detail.id,
            num:2
        }
        reqCarAdd(form).then(res=>{
            successAlert('添加成功');
            this.props.hide()
            console.log(this.props)
        })
    }
    hide(e){
        //调用父级的hide函数执行
        e.target.className=='picker'&&this.props.hide()
    }
    render() {
        let {detail} = this.props;
        let {n} = this.state
        return (
            <div className='picker' onClick={(e)=>this.hide(e)}>
                <ul className='con'>
                    <li className='firstli'>
                        <div><img src={detail.img}/></div>
                        <h1>{detail.goodsname}</h1>
                    </li>
                    <li className='secondli'>
                        <h2>{detail.specsname}</h2>
                        <div>
                            {
                                detail.specsattr.map((item,index)=>{
                                    return(
                                        <span key={item} className={index===n?'select':''} onClick={()=>this.changeN(index)}>{item}</span>
                                    )
                                })
                            }
                            
                        </div>
                    </li>
                    <li>
                        <button className='btn' onClick={()=>this.add()}>加入购物车</button>
                    </li>
                </ul>
            </div>
        )
    }
}
