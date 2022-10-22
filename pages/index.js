import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>f4bio.dev</title>
        <meta name="description" content="Developer Home Page" />
      </Head>

<div class="container">
      <div class="row">
        <div class="col-xs-12 text-align-center">

      <main className={styles.main}>
        <h1 className={styles.title}>
          Olá, me chamo Fábio Santos!
        </h1>

        <p className={styles.description}>
         Esse espaço foi criado para divulgar minhas redes sociais e os trabalhos que realizo como desenvolvedor. 
        </p>
        </div>
     </div>
        <div className={styles.grid}>
          <a href="https://github.com/f4biosa" className={styles.card}>
            <h2>/f4biosa no GitHub &rarr;</h2>
            <p>Aqui você encontra meus repositórios de código-fonte</p>
          </a>

          <a href="https://twitter.com/f4bio_sa" className={styles.card}>
            <h2>@f4bio_sa no Twitter &rarr;</h2>
            <p>Apenas acompanho alguns assuntos polêmicos</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="https://www.instagram.com/f4bio.sa/" className={styles.card}>
            <h2>@f4bio.sa no Insta&rarr;</h2>
            <p>Um pouco da minha rotina.</p>
          </a>

          <a href="https://www.linkedin.com/in/f4bio/" className={styles.card}>
            <h2>/in/f4bio/ no LinkedIn &rarr;</h2>
            <p>Experiência profissional aliada a formação de qualidade!</p>
          </a>
        </div>

      </main>
    </div>
</div>
  )
}
