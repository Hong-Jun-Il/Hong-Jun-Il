import React, {useRef, useEffect} from 'react';
import './Home.css';
import Transition from './Transition';
import gsap from 'gsap';

function Home(){
    const home = gsap.timeline();
    const homeh1 = useRef(null);
    const homeimg = useRef(null);
    useEffect(()=>{
        home.fromTo(homeh1.current,{
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0,
        }, {
            duration: 0.6,
            skewX: 0,
            x: 0,
            opacity: 1,
        },
        '-=3.5')
        home.fromTo(homeimg.current, {
            duration: .5, 
            y: -200,
            opacity: 0,
        }, {
            y: 0, 
            opacity: 1,
            onComplete: ()=>{
                home.kill();
            }
        }, '-=3');
    }, [])
    return(
        <div>
            <Transition timeline={home}/>
            <div className="home-image home-overlay" ref={homeimg}></div>
            <div className="container-home">
                <h1 ref={homeh1}>
                    Home Page
                </h1>
            </div>
        </div>
    )
}

export default Home