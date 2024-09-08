import React from 'react';
import './style.css'

//  Fragment
const MyComponent = () => {
  const name = 'Uyen';
  // const number = 1;
  const numbers = [1, 2, 3, 4, 5];
  const infor = {
    name: "Uyen",
    age: 25
  }

  // SON.stringify -> convert sang string
  return (
    <>
      <div>HelloOOOOOOOOOOOOOOOOOOOOO! {JSON.stringify(name)}</div>
      <div>HelloOOOOOOOOOOOOOOOOOOOOO! {JSON.stringify(infor)}</div>
      <div>HelloOOOOOOOOOOOOOOOOOOOOO! {JSON.stringify(numbers)}</div>

      <div>{console.log("Morning!")}</div>

      <div className='child'
      style={{borderRadius: '10px'}}
      >Aloo</div>
    </>
  );
}

export default MyComponent;