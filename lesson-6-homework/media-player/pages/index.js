import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ReactUpload } from 'react-upload-box'
import React, { useState } from 'react'

function Sidebar(){
  return (<div className={styles.sidebar}>
    <button>🔍</button>
    <button>🏠</button>
    <button>🎵</button>
    <button>❤️</button>
  </div>)
}

function Play(props){
  const [percentage, setPercentage] = useState(0)
  const [songIdx, setSongIdx] = useState(0)
  const [pause, setPause] = useState(true)
  const onClick = () => {
  }
  const uploadFile = async () => {
    setPercentage(newPercentage)
  }
  const handlePause = async () => {
    setPause(true)
  }
  const handleStart = async () => {
    setPause(false)
    setInterval(function(){ 
      console.log(percentage);
      setPercentage((s) => {
        if (s >= 100) setSongIdx((s) => (s + 4) % 3)
        return s != 100 ? s + 1 : 0
      }
        
      );
     }, 200)
  }
  return (<div className={styles.play}>
    <ReactUpload
          mode="light"
          fileName={props.songs[songIdx]}
          percentage={percentage}
          paused={pause}
          disabled={percentage === 100}
          completed={percentage === 100}
          onPause={handlePause}
          onStart={handleStart}
        />
  </div>)
}
function Cover(){
  return(<div className={styles.cover}>
    <img className={styles.large_album_img} src="https://avatars.githubusercontent.com/u/28986219?v=4 "></img>
    <div>
      <h1>Sophomore Trio</h1>
      <h3>2021 - BCYL</h3>
    </div>
    
  </div>)
}
function PlayBox(props){
  return (<div className={styles.playbox}>
    <img className={styles.album_img} src="https://avatars.githubusercontent.com/u/28986219?v=4 "></img>
    <Play controls autoplay className={styles.play} songs={props.songs}> 
      Your browser does not support the audio element.
    </Play>
  </div>)
}
export default function Home() {
  const songs = ["Plssssssss Hire Me Microsoft", "Who Ask (feat. Nobody)", "I Ask (feat. Benton)" ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Catty Music Box</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.left}>Music Player</div>
        <div className={styles.center}></div>
        <div className={styles.right}>
          <button>Like</button>
          <button>Login</button>
          <button>Sign-up</button>
        </div>

      </header>
      <main className={styles.main}>
        <Sidebar></Sidebar>
        <main className={styles.content}>
          <Cover></Cover>

          <ul className={styles.playlist}>
            <h3 className={styles.sg}>{songs[0]}</h3>
            <h3 className={styles.sg}>{songs[1]}</h3>
            <h3 className={styles.sg}>{songs[2]}</h3>
          </ul>
        </main>
        
      </main>
      <PlayBox songs={songs}></PlayBox>

    </div>
  )
}
