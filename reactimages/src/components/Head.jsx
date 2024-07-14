import React from 'react'

function Header(){
    return(
        <div className="sm:h-10 h-20 bg-indigo-500  w-full">
            <div className='md:ms-5 my-3 text-black sm:text-xl font-bold text-2xl absolute'>
                   Assam University , Silchar 
            </div>
            <Menu />

        </div>
    );
}

export default Header;

function Menu(){
    return(
        <div className='flex absolute sm:ms-72  my-12 sm:text-xl text-2xl  sm:my-3'>
           <div className='ms-3'>
            <a href="/" className='text-white '>Home</a>
           </div>
           <div className='ms-3'>
            <a href="/" className='text-white '>About</a>
           </div>
           <div className='ms-3'>
            <a href="/" className='text-white '>Contact</a>
           </div>
           <div className='ms-3'>
            <a href="/" className='text-white '>Login</a>
           </div>
        </div>
    );
}