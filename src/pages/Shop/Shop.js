import React, { Component } from 'react'
import Header from '../../component/Header/header'
import pic from '../../assets/img/radio_nor.png';
import pic1 from '../../assets/img/radio_hig.png';
import './shop.styl'
import { reqCarDel, reqCarEdit, reqCarList } from '../../utils/https';
import { successAlert ,confirmAlert} from '../../utils/alert';
export default class Shop extends Component {
    constructor() {
        super();
        this.state = {
            cartList: [],
            isEdit: false,
            isAll:false
        }
    }
    componentDidMount() {
        this.init()
    }
    init() {
        let uid = JSON.parse(sessionStorage.getItem("userInfo")).uid
        reqCarList(uid).then(res => {
            if(res.data.code===200){
                let cartList = res.data.list ? res.data.list : []
                cartList.forEach(item=>{
                    item.checked = false;
                })
                this.setState({
                    cartList: cartList
                })
            }
            
        })
    }
    del(id){
        confirmAlert(()=>{
            reqCarDel(id).then(res=>{
                if(res.data.code===200){
                    successAlert('删除成功')
                    this.init()
                }
            })
        })
        
    }
    edit() {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    add(id) {
        reqCarEdit({
            id: id,
            type: 2
        }).then(res => {
            if (res.data.code === 200) {
                this.init()
            }
        })
    }
    less(id, num) {
        if (num <= 1) {
            successAlert('亲，不能再少了o')
            return;
        }
        reqCarEdit({ id: id, type: 1 }).then(res => {
            if (res.data.code === 200) {
                this.init()
            }

        })
    }
    allCheck(){
        this.setState({
            isAll:!this.state.isAll,
            cartList:this.state.cartList.map(item=>{
                item.checked=!this.state.isAll;
                return item
            })
        })
    }
    changeCheck(i){
        let {cartList} = this.state;
        cartList[i].checked=!cartList[i].checked;
        this.setState({
            cartList:cartList,
            isAll:cartList.every(item=>item.checked)
        })
    }
    render() {
        let { cartList,isEdit,isAll} = this.state;
        let sum = 0;
        cartList.forEach(item=>{
            if(item.checked){
                sum+=item.price*item.num;
            }
        })
        return (
            <div className='shop'>
                <Header title='购物车'></Header>
                {
                    cartList.length === 0 ? <h1>购物车空空，快去逛街吧</h1> : null
                }
                <ul>
                    {
                        cartList.map((item,index) => (
                            <li key={item.id} className={isEdit?'show-del':''}>
                                <div className='firstD'><img src={item.checked?pic1:pic} onClick={()=>this.changeCheck(index)}/></div>
                                <div className='img'><img src={item.img} /></div>
                                <div className='secondD'>
                                    <p>{item.goodsname}</p>
                                    <p>
                                        <span onClick={() => this.less(item.id, item.num)}>-</span>
                                        <span>{item.num}</span>
                                        <span onClick={() => this.add(item.id)}>+</span>
                                    </p>
                                    <p>总价：{item.price*item.num}</p>
                                </div>
                                <div className='thiredD'>
                                    <p>￥{item.price}</p>
                                </div>
                                <div className='delD' onClick={()=>this.del(item.id)}>
                                    删除
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="footer">
                    <div className="quanxuan">
                        {/* 13.使用isAll */}
                        <img src={isAll?pic1:pic} onClick={()=>this.allCheck()} />
                        <div>全选</div>
                    </div>
                    <div className="edit" >
                        <img src={isEdit?pic1:pic}  onClick={() => this.edit()} />
                        <div>编辑</div>
                    </div>
                    <div className="price">
                        总价：{sum}
                    </div>
                    < button className='go'>去结算</button>
                </div>
            </div>
        )
    }
}
