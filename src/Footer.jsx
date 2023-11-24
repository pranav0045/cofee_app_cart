import './cofee.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () =>{
    return(

        <div className="footer">

            <div className="foot">
                <h2>About us</h2>
              <p>Cofee house</p>
              <p>our heritage</p>
              <p>our company</p>

            </div>

            
            <div className="foot">
                <h2>Responsibility</h2>
              <p>Ethical sourcing</p>
              <p>Environmental</p>
              <p>Stewardship</p>
              <p>Diversity</p>
            </div>


                   
            <div className="foot">
                <h2>Ouick links</h2>
              <p>Privacy policy</p>
              <p>delivery</p>
              <p>careers</p>
              <p>Faq's</p>
              <p>Reward's</p>
              <p>Customer service</p>
            
            </div>


            
                   
            <div className="foot">
            <h2>Social media</h2>
            <div className="foot-icons">

                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
                


            </div>
         
            </div>


                   


        </div>
    )
}

export default Footer;