import React from 'react'
import "./App.styl";
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Register/Register';
import Index from '../src/pages/Index/Index';
import Detail from '../src/pages/Detail/Detail';
import List from '../src/pages/List/List';
import {Switch,Route,Redirect} from 'react-router-dom';
export default function App() {
  return (
    <div className='app'>
      {/* 一级路由出口 */}
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/index' component={Index}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/list/:name/:id' component={List}></Route>
        <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  )
}

