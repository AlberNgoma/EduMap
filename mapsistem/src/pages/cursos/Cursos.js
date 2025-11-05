import "./Cursos.css"
import imgTec from "../../assets/tecnology.png"
import imgSaude from  "../../assets/saude.png"
import imgLivro from "../../assets/livros.png"

function Contactos(){
    return(
        <>
        <div className="container-fluild servicosContainer">
        <div className="container servicos">
            <h1 className="titulo animate__animated animate__bounceInDown animate__fast">CURSOS EM DESTAQUE</h1>
            <div className="row">
            <div className="col-md-4">
                <section>
                    <img className="imgCard" alt="img" src={imgTec}></img>
                        <h3>Tecnologia </h3>
                    <p>Os cursos de tecnologia têm como foco principal o estudo de sistemas lógicos, criação e desenvolvimento de softwares e hardware.</p>
                    <button className="btn btn-primary  animate__animated animate__jello animate__infinite btnSaberMais ">Saber Mais</button>
                </section>
            </div>

            <div className="col-md-4">
                <section>
                    <img className="imgCard" alt="img" src={imgSaude}></img>
                   <h3>Saúde </h3>
                    <p>Os cursos voltados para a área da saúde, têm como foco principal estudar a vida humana e animal afim de previnir e tratar diferentes doenças.</p>
                    <button className="btn btn-primary  animate__animated animate__tada animate__infinite btnSaberMais">Saber Mais</button>
                </section>
            </div>

                 <div className="col-md-4">
                <section>
                    <img className="imgCard" alt="img" src={imgLivro}></img>
                  <h3>Ciências Humanas</h3>
                    <p>O curso de Ciências Humanas tem como principal objectivo de estudar o ser humano em sociedade, suas culturas, relações, defeitos e comportamentos</p>
                    <button className="btn btn-primary  animate__animated animate__swing animate__infinite btnSaberMais">Saber Mais</button>
                </section>
            </div>




            </div>
        </div>
        </div>
        </>
    )
}

export default Contactos