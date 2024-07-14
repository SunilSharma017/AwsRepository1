import React from 'react'
import aus1 from './images/aus1.jpg'
import aus2 from './images/aus2.jpg'
import aus3 from './images/aus3.jpg'

function MainComponent(){
    return(
    <div>
        <h1 className='bg-red-700 text-white text-center'>Assam University </h1>
        <div className='md:flex w-full'>
            <img src={aus1} className='md:w-1/3 w-full h-52'/>
            <img src={aus2} className='md:w-1/3 w-full h-52'/>
            <img src={aus3} className='md:w-1/3 w-full h-52'/>
        </div>
    </div>
    );
}

export default MainComponent;
