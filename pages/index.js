import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
     <>
        <Head>
          <title>Kiche List | Home </title>
          <meta name='keywords' content='kiche'/>
        </Head>
        <div>
          
          <h1 className={styles.title}>Hello Allan</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores blanditiis alias repudiandae nulla voluptate quo consectetur facere officiis tenetur vero accusantium sint dolorem quae corporis recusandae tempora neque quibusdam, ipsum soluta? Repudiandae et voluptatibus quis deleniti ipsam id maiores itaque sed! Quam repellendus ullam rem cupiditate minus alias, blanditiis autem?</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores blanditiis alias repudiandae nulla voluptate quo consectetur facere officiis tenetur vero accusantium sint dolorem quae corporis recusandae tempora neque quibusdam, ipsum soluta? Repudiandae et voluptatibus quis deleniti ipsam id maiores itaque sed! Quam repellendus ullam rem cupiditate minus alias, blanditiis autem?</p>
          <Link href= "/kiche"><a className={styles.btn}>My Listing</a></Link>

          
          </div>
      </>
  )
}
