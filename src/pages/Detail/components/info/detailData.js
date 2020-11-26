import React from 'react'
import './detailDtat.styl'
export default function detailData(props) {
    let { detaildata } = props
    return (
        <div className='detailData'>
            <h3>{detaildata.goodsname}</h3>
            <div className='box'>
                <div className='detailData-pirce2'>现价：{detaildata.price}</div>
                {detaildata.isnew == 1 ? <div className='detailData-new'>新品</div> : null}
                {detaildata.ishot == 1 ? <div className='detailData-hot'>热卖</div> : null}
            </div>

            <div className='detailData-pirce1'>原价：{detaildata.market_price}</div>


        </div>
    )
}
