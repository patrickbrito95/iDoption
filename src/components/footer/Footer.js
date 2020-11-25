import React from 'react';
import './Footer.css';
import Facebook from '../../images/facebook.png';
import Instagram from '../../images/instagram.png';
import Twitter from '../../images/twitter.png';
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer>
            <div className="footer">
                <h3 >Entre em contato conosco:</h3>
                <h6>Essas são nossas redes sociais</h6>
                
                <p className="social"><img style={{width: "50px"}} src={Facebook} alt="facebook" /></p>
                <p className="social"><img style={{width: "50px"}} src={Instagram} alt="instagram" /></p>
                <p className="social"><img style={{width: "50px"}} src={Twitter} alt="twitter" /></p>
                
            </div>
                
                </footer>
        </div>
    )
}

export default Footer;