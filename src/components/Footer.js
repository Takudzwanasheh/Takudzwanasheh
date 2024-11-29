import React from 'react';
const Cyear=new Date().getFullYear()
const Footer = () => {
    return (
        
            
        <footer>
            <img
            className=''
                src='public/index.html'
                alt='uz lolo'
            />
            <p>&copy; {Cyear} UZ INTERNISH TRACKER. All rights reserved.</p>
            <div className='footer-btn'>
            <button  onClick={() => {/* handle privacy policy action */}}>Privacy Policy</button> 
            <button onClick={() => {/* handle terms of service action */}}>Terms of Service</button>

            </div>
        </footer>
        
    );
};

export default Footer;