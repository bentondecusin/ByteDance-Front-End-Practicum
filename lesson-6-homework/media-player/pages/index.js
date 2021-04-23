import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Sidebar(){
  return (<div className={styles.sidebar}>
    <button>🔍</button>
    <button>🏠</button>
    <button>🎵</button>
    <button>❤️</button>
  </div>)
}

function PlayBox(){
  return (<div className={styles.playbox}>
    <img className={styles.album}></img>
    <button>🏠</button>
    <button>🎵</button>
    <button>❤️</button>
  </div>)
}
export default function Home() {
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

      </main>
      <PlayBox></PlayBox>

    </div>
  )
}
