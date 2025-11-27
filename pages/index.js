import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>提示</title>
        <meta name="description" content="Serverless Next.js 应用" />
        <meta name="keywords" content="next,next.js,serverless,无服务" />
        <link rel="icon" href={`${process.env.STATIC_URL || ''}/favicon.ico`} />
      </Head>

      <main>
        <h1 className={styles.title}>维护中....</h1>

        <p className={styles.description}>
          <a href="https://cloud.tencent.com/product/ssr" target="_blank" rel="noopener noreferrer">
            
          </a>
      
        </p>
      </main>
    </div>
  )
}
