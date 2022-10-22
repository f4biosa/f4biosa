export default function Home() {
return (
<div>
    <div className="py-5 my-5 text-center">
            <h1 className="display-5 fw-bold"> Olá, me chamo Fábio Santos!</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Esse espaço foi criado para divulgar minhas redes sociais e os trabalhos que realizo como desenvolvedor.</p>
            </div>
    </div>
    <div className="container" id='feature-1'>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
                <div className="feature col">
                    <h6 className="fs-2"><a href="https://github.com/f4biosa" >/f4biosa</a> no GitHub &rarr;</h6>
                    <p className="card-text">Aqui você encontra meus repositórios de código-fonte</p>
                </div>
            <div className="feature col">
                <h6 className="fs-2"><a href="https://twitter.com/f4bio_sa" >@f4bio_sa</a> no Twitter &rarr;</h6>
                <p className="card-text">Apenas acompanho alguns assuntos polêmicos</p>
            </div>
            <div className="feature col">
                <h6 className="fs-2"><a href="https://www.instagram.com/f4bio.sa/" >@f4bio.sa</a> no Insta&rarr;</h6>
                <p className="card-text">Um pouco da minha rotina.</p>
            </div>
            <div className="feature col">
                <h6 className="fs-2"><a href="https://www.linkedin.com/in/f4bio/">/in/f4bio/</a> no LinkedIn &rarr;</h6>
                <p className="card-text">Experiência profissional aliada a formação de qualidade!</p>
            </div>
        </div>
    </div>
</div>
)
}
