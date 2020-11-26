import axios from 'axios';
import qs from 'qs';
import {successAlert} from '../utils/alert'
axios.interceptors.response.use((res)=>{
    console.log('路径为'+res.config.url)
    console.log(res);
    if(res.data.code!==200){
        successAlert(res.data.msg)
    }
    if(res.data.msg==='登录已过期或访问权限受限'){
        sessionStorage.removeItem('userInfo')
        window.location.href='http://localhost:3001/#/login'
    }
    return res;
})
axios.interceptors.request.use((req)=>{
    if(req.url!=='/api/register'&&req.url!=='/api/login'){
        req.headers.authorization=JSON.parse(sessionStorage.getItem('userInfo')).token;
    }
    return req;
})
//商品信息
export const reqCateList=()=>{
    return axios({
        url:'/api/getindexgoods'
    })
}
//获取一个商品信息
export const reqCateDetail=(id)=>{
    return axios({
        url:'/api/getgoodsinfo',
        method:'get',
        params:{
            id:id
        }
    })
}
//分类信息
export const reqCate=()=>{
    return axios({
        url:'/api/getcate'
    })
}
//轮播图
export const reqBanner=()=>{
    return axios({
        url:'/api/getbanner'
    })
}
//限时秒杀
export const reqSeckill=()=>{
    return axios({
        url:'/api/getseckill'
    })
}
//商品分类树形结构
export const reqCateTree=()=>{
    return axios({
        url:'/api/getcatetree',
    })
}
//获取分类商品
export const reqCateLists=(id)=>{
    return axios({
        url:'/api/getgoods',
        method:'get',
        params:{
            fid:id
        }
    })
}
//会员注册
export const reqRegister=(user)=>{
    return axios({
        url:'/api/register',
        method:'post',
        data:qs.stringify(user)
    })
}
//会员注册
export const reqLogin=(user)=>{
    return axios({
        url:'/api/login',
        method:'post',
        data:qs.stringify(user)
    })
}
//购物车添加
export const reqCarAdd=(form)=>{
    return axios({
        url:'/api/cartadd',
        method:'post',
        data:qs.stringify(form)
    })
}

