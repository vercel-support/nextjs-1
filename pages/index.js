import Head from 'next/head'
import {useRouter} from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>BasePath Image Bug</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          With basePath set to 
          <code className={styles.code}>'/blog'</code><br />
          With trailingSlash set to 
          <code className={styles.code}>true</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Router</h3>
            <p>basePath: {router.basePath}</p>
            <p>asPath: {router.asPath}</p>
          </div>

          <div className={styles.card}>
            <h3>Image</h3>
            <Image width="600" height="400" src="https://www.yesware.com/wp-content/uploads/2021/01/yesware-sales-prospecting-cover.png" />
          </div>

          <a href="/blog/test/" className={styles.card}>
            <h3>Link to Folder</h3>
            <p>/test/</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
