import Head from 'next/head'
//import styles from '../styles/Home.module.css'

export default function Home() {
return (
<div>
    <Head>
        <title>f4bio.dev</title>
        <meta name="description" content="Developer Home Page" />
    </Head>
    <main>
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
        
        <div className="row">
            <div className="col-lg-6 col-xs-12">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title"><a href="https://github.com/f4biosa" >/f4biosa no GitHub &rarr;</a></h2>
                        <p className="card-text">Aqui você encontra meus repositórios de código-fonte</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xs-12">
                <div className="card">

                    <div className="card-body">
                        <h2 className="card-title"><a href="https://twitter.com/f4bio_sa" >@f4bio_sa</a> no Twitter &rarr;</h2>
                        <p className="card-text">Apenas acompanho alguns assuntos polêmicos</p>
                    </div>
                </div>
            </div>


            <div className="col-lg-6 col-xs-12">
                <div className="card">

                    <div className="card-body">
                        <h2 className="card-title"><a href="https://www.instagram.com/f4bio.sa/" >@f4bio.sa</a> no Insta&rarr;</h2>
                        <p className="card-text">Um pouco da minha rotina.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xs-12">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title"> <a href="https://www.linkedin.com/in/f4bio/">/in/f4bio/</a> no LinkedIn &rarr;</h2>
                        <p className="card-text">Experiência profissional aliada a formação de qualidade!</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </main>
</div>
)
}
