import c0 from './images/cornell0.jpeg';
import c1 from './images/cornell1.jpeg';
import c2 from './images/cornell2.jpeg';
import c3 from './images/cornell3.jpeg';
import c4 from './images/cornell4.jpeg';
import c5 from './images/cornell5.jpeg';
import c6 from './images/cornell6.jpeg';
import c7 from './images/cornell7.jpeg';
import './App.css';
import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring'

//气死我了，react-spring demo用的是8.0.5，我用9.10.0怎么也写不出来

function App(){
  const images = [c0, c1, c2, c3, c4, c5, c6, c7]
  const [image, setImageIdx] = useState({imgIdx: 2, forward: true });
  const props = [{
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    from: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  },{
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  }]
  const transitions = useTransition(image["imgIdx"], props[(1 * image['forward'])]);
  return (<>
    <container>
      <button onClick={() => setImageIdx(image => ({
        imgIdx: (image["imgIdx"] - 1 + 8) % 8, forward: false
        }))}> &#10094; </button>
      <button onClick={() => setImageIdx(image => ({
        imgIdx: (image["imgIdx"] + 1) % 8, forward: true
        }))}> &#10095; </button>
      <div>{
        transitions((style, item) => {
          return <animated.div  style={style}> <img src={images[item]}/> 
          </animated.div>
        })
      }
      </div>
    </container>
    </>
  );
}


export default App;
