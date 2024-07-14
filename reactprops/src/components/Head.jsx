import React from 'react'

import logo from './images/car1.png'
function Header(){
return(
    <div className='w-full md:h-10 h-20 bg-orange-600 '>
        <Heading />
        <Menu />
    </div>
);
}

export default Header;

function Heading(){
    return( 
        <div className='absolute flex my-2  ms-10'>
              <img src={logo} className='w-7 h-7 rounded-full' alt="" />
              <div className='text-xl ms-3 text-white'>Car Collection </div>
        </div>
    );
}

function Menu(){
    return(
        <div className='absolute md:ms-52  my-10 md:my-2 flex'>
            <div class='ms-3'>
                <a href='\' class='text-lg text-black'>Home</a>
            </div>
            <div class='ms-3'>
                <a href='\' class='text-lg text-black'>Contact</a>
            </div>
            <div class='ms-3'>
                <a href='\' class='text-lg text-black'>Login</a>
            </div>
            <div class='ms-3'>
                <a href='\' class='text-lg text-black'>About </a>
            </div>
        </div>
    );
}