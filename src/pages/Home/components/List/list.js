import React, { Component } from 'react'
import './list.styl';

import {NavLink} from 'react-router-dom'
export default class extends Component {
    render() {
        return (
            <div className='list'>
                {
                    this.props.data.map(item => (
                        <NavLink to={'/detail?id='+item.id} key={item.id} className='list-bigbox'>
                            <div className='img'>
                                <img src={item.img} className='picture'/>
                            </div>

                            <div className='right'>
                                <h3>{item.goodsname}</h3>
                                <p>￥{item.price}</p>
                                <div className='list-click'>
                                    <span className='active1'>立即抢购</span>
                                </div>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        )
    }
}
