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
                {/* <div class="dropdown">
                    <button>Dropdown Menu</button>
                    <div class="dropdown-content">
                        <a href="#option1">Option 1</a>
                        <a href="#option2">Option 2</a>
                        <a href="#option3">Option 3</a>
                    </div>
                </div> */}

                <div className='navigationBar' >
                <ul>

                <li><a href='/'>Home</a></li>
                <li><a href='/About'>About</a></li>
                <li><a href='/Contact'>Contact</a></li>
                <li><a href='/signup'>Sign up</a></li>
                </ul>
                
                </div>
                
            </nav>
        </header>
    );
};

export default Header;