import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef} from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, 
            { showCursor: false, 
                backDelay: 1000,
                strings: ['Mujeres Dedicadas', 'Mujeres Empoderadas', 'Mujeres Soñadoras' ] 
            })
    }
    ,[]);

    const textRefH = useRef();

    useEffect(()=>{
        init(textRefH.current, 
            { showCursor: true, 
                backDelay: 100,
                strings: ['Lugar exclusivo para ti..','Pagos inmediatos.', 'Flexibilidad Laboral..' ] 
            })
    }
    ,[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/logoimg.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2><span ref={textRefH}></span></h2>
                    <h1>L'amore Studio</h1>
                    <h3>Buscamos <span ref={textRef}></span></h3>
                    
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
