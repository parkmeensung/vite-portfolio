import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro(){
    gsap.registerPlugin(ScrollTrigger)
    const frameCount = 38
    let offsetValue = 100

    gsap.to('.img',{
        backgroundPositionX:(-offsetValue*frameCount)+'%',
        ease:'steps('+frameCount+')',
        scrollTrigger:{
            trigger:'#intro',
            start: 'top top',
            end:'+='+(frameCount*offsetValue),
            pin:true,
            scrub:true
        }

    })
}