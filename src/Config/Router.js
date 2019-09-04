import React from "react";
import { Router, Route} from "react-router-dom";
import history from '../history'
import {Home, Login, Shop, Singleproduct} from '../container/index'
// import Home from "../../Home/Home";

export default class BasicRouter extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Route exact path='/' component={Home}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Shop' component={Shop}/>
                <Route path='/Singleproduct' component={Singleproduct}/>
            </Router>
        )
    }
}