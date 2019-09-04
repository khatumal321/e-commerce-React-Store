import React from 'react';
import './App.css';
import BasicRouter from './Config/Router'
import Footer from './component/Footer/Footer'

export default class Appbar extends React.Component{
  constructor(){
  super()
}
  render(){
    return(
      <div>
        <BasicRouter/>
        <Footer/>     

      </div>
    )
  }
}
