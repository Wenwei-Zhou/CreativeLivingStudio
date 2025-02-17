import React from "react";
import weweshop from '../images/WEWESHOP.png'
import { Link, useLocation } from "react-router";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";
import './Footer.css'

export const Footer = () => {
    const currentURL = useLocation();
return(
    <div className="footer">

        <div className="footer-head">
        <h3>WEWE SHOP</h3>
        <h3>Links</h3>
        <h3>Follow us</h3>
        </div>

    <div className="footer-item">

        <div className="footer-logo">
            {/* <h3>WEWE SHOP</h3> */}
            <img src={weweshop} alt="weweshop" style={{width: '30%', height: 'auto'}}/>
        </div>

        <div className="footer-link">
            <ul className="navItem">
                <li><Link to="/Login" style={{color: currentURL.pathname === '/Login' ? 'DeepPink' : ''}}>Sign in</Link></li>
                <li><Link to="/About" style={{color: currentURL.pathname === '/About' ? 'DeepPink' : ''}}>About us</Link></li>
                <li><Link to="/Contact" style={{color: currentURL.pathname === '/Contact' ? 'DeepPink' : ''}}>Contact</Link></li>
            </ul> 
        </div>

        <div className="footer-follow">
            {/* <h3>Follow us</h3> */}

            <a href="https://www.facebook.com/share/19xvcL9xj2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <CiFacebook color="tomato" size="50px"/>
            </a>

            <a href="https://www.tiktok.com/@creativelivingstudio?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <RiTiktokLine color="tomato" size="50px"/>
            </a>
        </div>

        </div>

    </div>

//     <footer style={{backgroundcolor: '#222', color: '#fff', padding: '40px 20px', textalign: 'center'}}>
//     <div>
//         <h3>Brand Name</h3>
//         <p>致力于提供优质产品和服务，让您的生活更美好。</p>
//     </div>
//     <div>
//         <a href="/about" style="color: #fff; margin: 0 10px;">关于我们</a>
//         <a href="/services" style="color: #fff; margin: 0 10px;">服务</a>
//         <a href="/contact" style="color: #fff; margin: 0 10px;">联系我们</a>
//         <a href="/privacy" style="color: #fff; margin: 0 10px;">隐私政策</a>
//     </div>
//     <div style="margin-top: 10px;">
//         {/* <a href="#"><img src="facebook-icon.png" width="24"></a>
//         <a href="#"><img src="instagram-icon.png" width="24"></a>
//         <a href="#"><img src="linkedin-icon.png" width="24"></a> */}
//     </div>
//     <div style="margin-top: 20px;">
//         <p>© 2024 Brand Name. All rights reserved.</p>
//     </div>
// </footer>

)
}