import React from 'react';
import nature1 from './images/nature1.jpg';
import nature2 from './images/nature2.jpg';
import nature3 from './images/nature3.jpg';

function Main(){
    return (
        <div className='sm:flex'>
      <img src={nature1} alt='nature1' className='sm:w-1/3 w-full border-4 border-red-600' />
      <img src={nature2} alt='nature2' className='sm:w-1/3 w-full border-4 border-red-600'/>
      <img src={nature3} alt='nature3' className='sm:w-1/3 w-full border-4 border-red-600'/>
      </div>
    );
}

export default Main;