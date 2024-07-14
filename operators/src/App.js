
import React from 'react';


function App(){

  let a=10
  a=40

  var b=30
  var b=100
  const c=40
  // c=120

  // operators : 
  // arihtmetic operators : +,-,/,*,%

  // function component . 

  let d=200
  let e=300



  return (
    <div>
        <h1>first value is  : {a}</h1>
        <h2>second value is : {b}</h2>
        <h3> third value is  : {c}</h3>
        <h1>addition of two numbers : {d+e} </h1>
        <Add />
        <Add />
        <Sub />
        <Arithmetic />
        <PerimeterTriangle />
        <AreaOfRectangle />

    </div>
  );
}

export default App;

function Add(){
  let num1=100
  let num2=200
  return(
      <h1>{num1+num2}</h1>
  );
}

function Arithmetic(){
  let num1=20
  let num2='20'
  let num3=40
  return (
    <div>
    <h1>{num1+num2}</h1>
    <h1>{num2+num1}</h1>
    <h1>{num1+num3+num2}</h1>
    <h1>{num2+num1+num3}</h1>
    </div>
  );
}
function PerimeterTriangle(){
  let side1=10
  let side2=20
  let side3=40
  return(
    <h1>Perimeter of triangle is : {side1+side2+side3}</h1>
  );
}
function AreaOfRectangle(){
  let length=10
  let width=20
  return(
    <h1>Area of rectangle is : {length*width}</h1>
  );

}
function Sub(){
  let num3=20
  let num4=10
  return(
    <div>
      <h1>{num3-num4}</h1>
    </div>
  );
}
// datatypes : 
// let , var , const . 

// let :  single time define multiple time change . 
// var :  mutlile define and multiple time can change it . 
// const  : single time define and single time change . 

// function : it is block of code which perform some specific task .
//  function  is reusable . 
// using fuction call . 

// function define . 


// syntax of function define . 
// function function_name(){
//   variables define . 
//     return (
//       return values . 
//     );
// }

//  function call . 

// <function_name/>

// num+str : merge .  // 10+"20"=1020
// str+num : merge .  // "30"+10=3010
// num+num+str : merge . // 10+5+"70"=1570
// str+num+num : // "40"+10+20 =4030 401020

// find the perimeter of rectangle . 
// find the volume of cube . 
// find the volume of cuboid . 
// find the total surface area of cube . 
// find the total surface area of cuboid . 
// find the area of square . 

// using fuction component . 