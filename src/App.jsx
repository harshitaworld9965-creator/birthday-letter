import { useRef } from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import "./App.css";

gsap.registerPlugin(useGSAP);

function App() {
  const scene = useRef(null)
  const tl = useRef(null)

  useGSAP(
    () => {
      gsap.from('.envelope', {
        y: 40,
        rotation:-3,
        opacity:0,
        duration:1,
        ease:'power3.out',
      })
      gsap.from('.hint', {opacity:0, duration:0.6, delay:0.7,})

      gsap.set('.card-inside > *', {opacity:0, y:8})

      const isSmall = window.innerWidth < 500

      tl.current = gsap 
      .timeline({paused:true})

      .to('.seal', {scale:1.25, duration:0.15, ease:'power1.out'})
      .to('.seal',{
        scale:0,
        rotation:25,
        opacity:0,
        duration:0.35,
        ease:'back.in(2)',
      })
      .to('.hint', {opacity:0, duration:0.3}, '<')

      .to('.envelope-flap', {
        rotationX:180,
        duration:0.7,
        ease:'power2.inOut',
      })
      .set('.envelope-flap', {zIndex:1}, '-=0.35')

      .to('.card', {yPercent:-70, duration:0.8, ease:'power2.out'})

      .set('.card', {zIndex:6})
      .to('.card', {
        yPercent:15,
        scale:isSmall ?1.1:1.35,
        duration:0.9,
        ease:'back.out(1.4)',
      })

      .to('.card-cover', {
        rotationX:180, duration:1, ease:'power2.inOut'
      }, '+=0.15')

      .to('.card-inside > *', {
        opacity:1,
        y:0,
        duration:0.5,
        stagger:0.12,
        ease:'power2.out',
      }, '-=0.4')
    }, {scope: scene}
  )

  return (
    <main className="scene" ref={scene}>
      <div className="envelope">
        <div className="envelope-back"></div>

        <div className="card">
          <div className="card-inside">
            <p className="card-small">31 October</p>
            <h1 className="card-title">Happy Birthday</h1>
            <h2 className="card-name">Harshita</h2>
            <p className="card-message">Here's to another year of learning new things
              , building pretty stuff, and being proud of how far I've come.
            </p>
            <p className="card-sign">with love ♡</p>
          </div>

          <div className="card-cover">
            <span className="card-cover-text">for you ♡</span>
          </div>
        </div>

        <div className="envelope-pocket"></div>
        <div className="envelope-flap"></div>

        <button className="seal" aria-label="Open the letter" onClick={() => tl.current.play()}>H</button>
      </div>

      <p className="hint">tap the seal</p>
    </main>
  )
}

export default App;