import React, { Component } from 'react'
import './nav.styl';
export default class nav extends Component {
    constructor() {
        super();
        this.state = {
            navList: [
                { id: 1, imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2369017631,3935728806&fm=26&gp=0.jpg', title: '限时抢购' },
                { id: 2, imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2369017631,3935728806&fm=26&gp=0.jpg', title: '限时抢购' },
                { id: 3, imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2369017631,3935728806&fm=26&gp=0.jpg', title: '限时抢购' },
                { id: 4, imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2369017631,3935728806&fm=26&gp=0.jpg', title: '限时抢购' }
            ]
        }
    }
    render() {
        return (
            <div className='nav'>
                {
                    this.state.navList.map(item => (
                        <div key={item.id}>
                            <div>
                            <img src={item.imgUrl}/>
                            </div>
                            <span>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
}
