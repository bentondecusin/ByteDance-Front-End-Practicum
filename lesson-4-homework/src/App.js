import c0 from './images/cornell0.jpeg';
import c1 from './images/cornell1.jpeg';
import c2 from './images/cornell2.jpeg';
import c3 from './images/cornell3.jpeg';
import c4 from './images/cornell4.jpeg';
import c5 from './images/cornell5.jpeg';
import c6 from './images/cornell6.jpeg';
import c7 from './images/cornell7.jpeg';

import './App.css';
import React, { useState, useEffect } from 'react';
import reactDom from 'react-dom';

function Buttons(){
  const images = [c0, c1, c2, c3, c4, c5, c6, c7]
  const [imgIdx, setImageIdx] = useState(0);
  return (
    <>
      <button onclick={() => setImageIdx((imgIdx - 1 + 8) % 8)}> &#10094;{imgIdx}</button>,
      <button onclick={() => setImageIdx((imgIdx + 1) % 8)}> &#10095; {imgIdx}</button>,
      <div> <img src={images[imgIdx]} /> </div>
    </>

  );
}


export default Buttons;
