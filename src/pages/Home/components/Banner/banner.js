import React, { Component } from 'react'
import './banner.styl';
import { Carousel } from "antd-mobile"
export default class banner extends Component {
    render() {
        return (
            <div className='banner'>
                <Carousel
                autoplay={true}
                infinite
            >
                {this.props.bannerList.map(item => (
                    <a
                        key={item.id}
                        style={{ display: 'inline-block', width: '100%', height: '100%' }}
                    >
                        <img
                            src={item.img}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                            }}
                        />
                    </a>
                ))}
            </Carousel>
            </div>
        )
    }
}
