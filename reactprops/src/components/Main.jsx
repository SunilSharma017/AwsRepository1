import React from 'react'

function MainContent(){
    return(
        <div className=''>
        <GiveMessage message="hey vishal how are you"/>
        <GiveMessage message="dorya is good student "/>
        <GiveMessage message="gaurav is taking the class of react "/>
        </div>
    );
}
export default MainContent;

function GiveMessage(props){
    return(
        <div>
            <h1>{props.message}</h1>
        </div>
    );
}