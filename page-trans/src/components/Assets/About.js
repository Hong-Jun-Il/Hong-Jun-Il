import React, {useRef, useEffect, useState} from 'react'
import './About.css';
import Transition from './Transition';
import gsap from 'gsap';

function About(){
    const about = gsap.timeline();
    const aboutimg = useRef(null);
    const abouth1 = useRef(null);
    useEffect(()=>{
        about.fromTo(abouth1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0,
        }, {
            duration: 0.6,
            skewX: 0,
            x: 0,
            opacity: 1,
        },'-=3.5')
        about.fromTo(aboutimg.current, {
            duration: .5, 
            y: -200,
            opacity: 0,
        }, {
            y: 0, 
            opacity: 1,
            onComplete: ()=>{
                about.kill();
            }
        },'-=3')
    })
    return(
        <div>
            <Transition timeline={about}/>
            <div className="about-image about-overlay" ref={aboutimg}></div>
            <div className="container-about">
                <h1 ref={abouth1}>
                    About Page
                </h1>
            </div>
        </div>
    )
}

export default About