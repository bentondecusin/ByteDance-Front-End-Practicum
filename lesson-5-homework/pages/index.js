import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react"
//How to import an image??
// import icon from '../styles/toutiao-icon.png'

export default function Home() {
  const menu = ["推荐", "视频", "热点", "社会", "娱乐", "军事", "科技", "汽车", "房产", "家居", "体育", "财经"]
  const [state, setState] = useState({
    list: [],
  });
  useEffect(() => {
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);

  return (
  <div>
    <div className={styles.top_bar}>
      <span>今日头条</span>
    </div>
    <div className={styles.top_menu}>
      {menu.map((i) => {return <span href="https://m.toutiao.com/?W2atIF=1" className={styles.top_menu_item}> {i} </span>})}
    </div>
    <div className={styles.container}>
      <main className={styles.main}>
        {state.list.map((i) => {
          return (
            
            <div className={styles.feed_container}>
              <div className={styles.title} href={i.title_link}> {i.title}</div>
              <div className={styles.img_list}>
                {i.imgs.map((j) => {return (<img className={styles.img} src={j} />);})} 
              </div>
              <div className={styles.footer_bar}>
                <a className={styles.lab}>{i.lab}</a> {i.src} {i.cmt} {i.time}
              </div>
            
            </div>
          );
        })}
      </main>
    </div>
    </div>
  );
}
