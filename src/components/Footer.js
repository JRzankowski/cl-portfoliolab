import React, {Component} from 'react';

import ig from '../assets/Instagram.svg'
import fb from '../assets/Facebook.svg'



export default class Footer extends Component {
    render() {
        return (
           <footer className='footer'>
               <p className='footer__copyright'>Copyright by Coders Lab</p>
               <div className="footer__socials">
                   <a href='#'><img className='footer__socials--fb' src={fb} alt='facebook icon'/></a>
                   <a href='#'><img className='footer__socials--ig' src={ig} alt='instagram icon'/></a>
               </div>

           </footer>
        );
    }
}