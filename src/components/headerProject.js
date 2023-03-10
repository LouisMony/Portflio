import React from 'react';
import {Component} from 'react'
import '../style/HeaderProject.scss';

export default class HeaderProject extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
      console.log('start')
    }
    
    render() {
      return(
        <div className='header'>
            <div className='header__left'>
            <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 7.2929C-0.0976311 7.68342 -0.097631 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292893 7.2929ZM41 7L1 7L1 9L41 9L41 7Z" fill="#EEEEEE"/>
            </svg>
                <h1>{this.props.title}</h1>
            </div>
          <div className='header__right'>
            <span className='header__right__top'>
                {this.props.type}<br/>
            </span>
            <span className='header__right__bottom'>
                {this.props.techno}
            </span>
          </div>
        </div>
      ) ;
    }
  }