import React from 'react';
//import {Component} from 'react'
import '../style/HeaderProject.scss';
import gsap from 'gsap';
import SplitType from 'split-type';

export default class HeaderProject extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
      this.InitAnimation()
    }

    InitAnimation(){
      const MyTitle = new SplitType('#js_gsap_title', { charClass: 'charHead' })

      gsap.to('.charHead', {
        y:0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      })
    }
    
    render() {
      return(
        <div className='header'>
            <div className='header__left'>
                <h1 id='js_gsap_title' className='js_h1'>{this.props.title}</h1>
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