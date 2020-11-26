import React, { Component } from 'react'
import Header from '../../component/Header/header'
import pic from '../../assets/img/radio_nor.png';
import pic1 from '../../assets/img/radio_hig.png';
import './shop.styl'
export default class Shop extends Component {
    render() {
        return (
            <div className='shop'>
                <Header title='购物车'></Header>
                <ul>
                    <li>
                        <div className='firstD'><img src={pic} alt="" /></div>
                        <div className='img'><img src="https://img2.woyaogexing.com/2020/11/19/3a17b6603352409485c27cc765f22aee!400x400.jpeg" alt="" /></div>
                        <div className='secondD'>
                            <p>雪豹秋日牛皮男装</p>
                            <p>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </p>
                            <p>总价：368</p>
                        </div>
                        <div className='thiredD'>
                            <p>￥368</p>
                        </div>
                        <div className='delD'>
                            删除
                        </div>
                    </li>
                    <li>
                        <div className='firstD'><img src={pic} alt="" /></div>
                        <div className='img'><img src="https://img2.woyaogexing.com/2020/11/19/3a17b6603352409485c27cc765f22aee!400x400.jpeg" alt="" /></div>
                        <div className='secondD'>
                            <p>雪豹秋日牛皮男装</p>
                            <p>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </p>
                            <p>总价：368</p>
                        </div>
                        <div className='thiredD'>
                            <p>￥368</p>
                        </div>
                        <div className='delD'>
                            删除
                        </div>
                    </li>
                </ul>
                <div className="footer">
                    <div className="quanxuan">
                        {/* 13.使用isAll */}
                        <img src={pic} alt="" />
                        <div>全选</div>
                    </div>
                    <div className="edit" >
                        <img src={pic} alt="" />
                        <div>编辑</div>
                    </div>
                    <div className="price">
                        总价：
                    </div>
                    < button className='1'>去结算</button>
                </div>
            </div>
        )
    }
}
