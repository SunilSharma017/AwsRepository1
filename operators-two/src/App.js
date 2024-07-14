import React from 'react'
import './App.css';
import img1 from './images/two.jpg'
import img2 from './images/one.avif'
// function App(){
//   let value="tell me something about you"
//   return(
//      <Greetings message={value} />
//   );
// }

// export default App;

// function Greetings({message}){
//   return <h1>hey Anish! how are you ? {message}</h1>
// }


function App(){
  return(
    <div>
    <div className='head'>
      <div className='heading'>welcome in Tca </div>
      <div className='menu'>
        <div className='submenu'>
          <a href='#'>Home</a>
        </div>
        <div className='submenu'>
          <a href='#'>About</a>
        </div>
        <div className='submenu'>
          <a href='#'>Login</a>
        </div>
        <div className='submenu'>
          <a href='#'>Sign In</a>
        </div>
      </div>
    </div>
    <main>
      <img src={img1} alt='{two}'/>
      <img src={img2} alt='{one}'/>
      <img src={img1} alt='{two}'/>
      <img src={img1} alt='{two}'/>
      <img src={img1} alt='{two}'/>

    </main>
     </div>
  );
}

export default App;


