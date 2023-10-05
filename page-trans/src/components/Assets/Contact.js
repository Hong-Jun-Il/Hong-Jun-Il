import React, { useRef, useEffect } from 'react'
import './Contact.css';
import Transition from './Transition';
import gsap from 'gsap';

function Contact(){
    const contact = gsap.timeline();
    const contacth1 = useRef(null);
    const contactimg = useRef(null);
    useEffect(()=>{
        contact.fromTo(contacth1.current, {
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
        contact.fromTo(contactimg.current, {
            duration: .5, 
            y: -200,
            opacity: 0,
        }, {
            y: 0, 
            opacity: 1,
            onComplete: ()=>{
                contact.kill();
            }
        },'-=3')
    })
    return(
        <div>
            <Transition timeline={contact}/>
            <div className="contact-image contact-overlay" ref={contactimg}></div>
            <div className="container-contact">
                <h1 ref={contacth1}>
                    Contact Page
                </h1>
            </div>
        </div>
    )
}

export default Contact