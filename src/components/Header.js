import React from 'react';
const Header = () => {
    return (
        <header>
            <h1>UZ INTERNISH TRACKER</h1>
            <nav>
                {/* <div>
                <img
                    className='circular_image'
                    src='https://www.uz.ac.zw/images/uz-logo-1131_1.jpg'
                    alt=''
                />

                </div>  */}
                <div className='navigationBar' >
                <ul>

                <li><a href='/Welcome'>Home</a></li>
                <li><a href='/About'>About</a></li>
                <li><a href='/Contact'>Contact</a></li>
                <li><a href='/'>Sign up</a></li>
                </ul>
                
                </div>
                
            </nav>
        </header>
    );
};

export default Header;