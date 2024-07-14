
import React from 'react';

function Header(){
            
    return (
    
        <div className='bg-gray-500'>  
            <div className='flex md:ml-80 ml-40 text-white'>
                <span className='font-bold'>SunTech</span>
            </div>

            <ul className='flex'>
                <li className='sm:ml-20 ml-3' >
                    <a href="/" className='text-white'>Home</a>
                </li>
                <li className='sm:ml-20 ml-3'>
                    <a href="/" className='text-white'>Login</a>
                </li>
                <li className='sm:ml-20 ml-3'>
                    <a href="/" className='text-white'>About</a>
                </li>
                <li className='sm:ml-20 ml-3'>
                    <a href="/" className='text-white'>contact</a>
                </li>
                <li className='sm:ml-20 ml-3'>
                    <a href="/" className='text-white'>feedback</a>
                </li>
            </ul>

        </div>

    );
}

export default Header;