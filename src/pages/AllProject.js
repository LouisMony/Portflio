import React from 'react';
import {Component} from 'react'

//COMPONENTS
import Menu from '../components/Menu';
import Menu_icon from '../components/Menu_icon';
import HeaderProject from '../components/headerProject';

//JS & STYLE
import gsap from 'gsap';
import SplitType from 'split-type';

import MenuJs from '../js/MenuAnimation';
import Marquee from 'react-fast-marquee';
import '../style/AllProjects.scss';

export default class AllProjects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){this.InitAnimation()}

    InitAnimation(){
        const MyTitle = new SplitType('#js_word', { charClass: 'charrr' })
        const charrr = Array.from(document.querySelectorAll('.charrr'))

        let i = 1
        charrr.forEach(item =>{
            item.dataset.order = item.parentNode.parentNode.parentNode.id + i
            i++
        })
        charrr.forEach(item => {
            item.addEventListener("mouseover", (event) => {
                const previous1 = document.querySelector("[data-order='js_word"+(parseInt(event.target.dataset.order.slice(-1))-1)+"']")
                const next1 = document.querySelector("[data-order='js_word"+(parseInt(event.target.dataset.order.slice(-1))+1)+"']")
                if(previous1 !== null){previous1.style.transform = "scaleY(1.25)"}
                if(next1 !== null){next1.style.transform = "scaleY(1.25)"}
                event.target.style.transform = "scaleY(1.5)"

            });
            item.addEventListener("mouseleave", (event) => {
                const previous1 = document.querySelector("[data-order='js_word"+(parseInt(event.target.dataset.order.slice(-1))-1)+"']")
                const next1 = document.querySelector("[data-order='js_word"+(parseInt(event.target.dataset.order.slice(-1))+1)+"']")
                if(next1 !== null){next1.style.transform = "scaleY(1)"}
                if(previous1 !== null){previous1.style.transform = "scaleY(1)"}
                event.target.style.transform = "scaleY(1)"
            });

        })
    }

    render() {
      return(
        <div className='Projects'> 
          <Menu/>
          <div onClick={MenuJs}>
            <Menu_icon />
          </div>

          <HeaderProject title="Projects"/>

          <div className='Projects__main'>
            <Marquee pauseOnHover={true} speed={75} gradient={false}>
                <div className='Projects__main__slider'>
                    <div className='Projects__main__slider__item' id='js_word_1'>AIDES</div>
                    <p className='Projects__main__slider__item' id='js_word_2'>Op'Box</p>
                    <p className='Projects__main__slider__item' id='js_word_3'>MUSIC</p>
                    <p className='Projects__main__slider__item' id='js_word_4'>EVENTS</p>
                </div>
            </Marquee>
            <br/><br/><br/><br/><br/>
            <strong><div className='Projects__main__slider__item' id='js_word'>AIDEEEES</div></strong>
          </div>
        </div>
      ) ;
    }
  }