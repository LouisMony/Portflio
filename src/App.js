import React from 'react';
import {Component} from 'react'

//COMPONENTS
import Menu from './components/Menu';
import Menu_icon from './components/Menu_icon';

//JS&CSS
import MenuJs from './js/MenuAnimation';
import gsap from 'gsap';
import './style/Home.scss';

export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
    }

    render() {
      return(
        <div className='Home'> 
          <Menu/>
          <div onClick={MenuJs}>
          <Menu_icon />
          </div>
          
        </div>
      ) ;
    }
  }