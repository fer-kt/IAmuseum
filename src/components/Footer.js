import React from "react"; 
import { FaInstagram, FaGithub } from "react-icons/fa";  
import {BiMailSend} from "react-icons/bi"

const Footer =()=>{
    
    return (
        <footer>
            <p>
            &copy; 2022 Fernando Caté
            </p>
           
           <a href="mailto:fernandoecate@gmail.com" target="_blank" rel="noopener noreferrer"> <BiMailSend  className="socialMedia__icons"/>  </a>
            <a href="https://www.instagram.com/fer_kt/" target="_blank" rel="noopener noreferrer"> <FaInstagram className="socialMedia__icons"/> </a>
            <a href="https://github.com/fer-kt/fer-kt" target="_blank" rel="noopener noreferrer"> <FaGithub className="socialMedia__icons"/> </a>
            
            

        </footer>
    )
}
export default Footer