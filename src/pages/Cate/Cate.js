import React, { Component } from 'react'
import { reqCateTree } from '../../utils/https';
import Header from '../../component/Header/header';
import './cate.styl'
export default class Cate extends Component {
    constructor() {
        super()
        this.state = {
            cateArr: [],
            n: 0
        }
    }
    componentDidMount() {
        reqCateTree().then(res => {
            this.setState({
                cateArr: res.data.list
            })
        })

    }
    clickN(index) {
        this.setState({
            n: index
        })
    }
    toList(name,id){
        this.props.history.push('/list/'+name+'/'+id)
    }
    render() {
        let {  cateArr ,n} = this.state;
        let rightList = cateArr[n] ? cateArr[n].children : []
        return (
            <div>
                <Header title='分类'></Header>
                <div className="cate">
                    <ul className='cate-left'>
                        {
                            cateArr.map((item, ind) => {
                                return (
                                    <li key={item.id} className={ind === n ? 'select' : ''} onClick={() => this.clickN(ind)}>{item.catename}</li>
                                )
                            })
                        }
                    </ul>
                    <ul className='cate-right'>
                        {
                            rightList.map(item => {
                                return (
                                    <li key={item.id} onClick={()=>this.toList(item.catename,item.id)}>
                                        <img src={item.img} alt="" />
                                        <p>{item.catename}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
