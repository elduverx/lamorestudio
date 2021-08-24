import "./topbar.scss"
import {Mail,WhatsApp} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">L'Amore Studio</a>
                    <div className="itemContainer">
                    <WhatsApp className="icon"/>
                    <span>311 686 7332</span>     
                    </div>
                    <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>lamorecali@gmail.com</span>
                    
           
        
                    </div>
                </div>
                <div className="right">
                     <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    );
}
