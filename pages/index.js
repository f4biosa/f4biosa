import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
    <div>
      <Head>
        <title>f4bio.dev</title>
        <meta name="description" content="Developer Home Page" />
      </Head>
    <main className={styles.main}>
        <div className="container">
            <div className="row">
          
              <div className="col-xs-12 text-align-center">
                  <h1 className='hero-title'>
                    Olá, me chamo Fábio Santos!
                  </h1>

                  <p className='hero-description'>
                   Esse espaço foi criado para divulgar minhas redes sociais e os trabalhos que realizo como desenvolvedor. 
                  </p>
                </div>
            </div>
          </div>
        <div className="row">
        <div className="col-lg-6 col-xs-12">
              
                <a href="https://github.com/f4biosa" className='card'>
                    <div className="card-body">
    <h2 className="card-title">/f4biosa no GitHub &rarr;</h2>
                      <p className="card-text">Aqui você encontra meus repositórios de código-fonte</p>
</div>
                </a>
        </div>
        <div className="col-lg-6 col-xs-12">
                <a href="https://twitter.com/f4bio_sa" className='card'>
                    <div className="card-body">
    <h2 className="card-title">@f4bio_sa no Twitter &rarr;</h2>
                   <p className="card-text">Apenas acompanho alguns assuntos polêmicos</p>
</div>
                </a>
              </div>


              <div className="col-lg-6 col-xs-12">
                <a href="https://www.instagram.com/f4bio.sa/" className='card'>
                    <div className="card-body">
    <h2 className="card-title">@f4bio.sa no Insta&rarr;</h2>
                   <p className="card-text">Um pouco da minha rotina.</p>
</div>
                </a>
</div>
<div className="col-lg-6 col-xs-12">
                <a href="https://www.linkedin.com/in/f4bio/" className='card'>
                    <div className="card-body">
    <h2 className="card-title">/in/f4bio/ no LinkedIn &rarr;</h2>
                   <p className="card-text">Experiência profissional aliada a formação de qualidade!</p>
</div>
                </a>

              </div>
</div>
       </main>
</div>
  )
}
