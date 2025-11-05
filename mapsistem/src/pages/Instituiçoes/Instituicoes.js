import "./Instituicoes.css"
import imgFormacao from "../../assets/salaReunia.jpg"
import imgEscolaP from "../../assets/escolapu.png"
import imgColegio from "../../assets/escolaPrivada.jpeg"

function Instituicoes(){
    return(
        <>
        <div className="container-fluid instituicoesContainer">
            <div className="container instituicoes">
            <h1 className="titulo animate__animated animate__bounceInDown animate__slow">INSTITUIÇÕES</h1>
            <h4 className="animate__animated animate__bounceInUp fast">Com o EduMap, você poderá ter acesso ao diferentes instituições de ensino de acordo a sua localização.</h4>
            <div className="row">
                <div className="col-md-4">
                    <section>
                    <img className="imgensInstituicoes" alt="scholl" src={imgColegio}></img>
                    <h3>Escolas Privadas</h3>
                    <p>São instituições de nível económido médio/alto que constam com diferentes tipos de cursos e actividades com objectivo de garantir que os estudantes tenham um ensino de qualidade</p>
                    </section>
                </div>

                     <div className="col-md-4">
                    <section>
                    <img className="imgensInstituicoes" alt="scholl" src={imgEscolaP}></img>
                    <h3>Escolas Públicas</h3>
                    <p>São aquelas que estão disponíveis para todos os tipos de classes socias, mas, com professores e funcionários de qualidade para garantir o desempenho de todos os estudantes.</p>
                    </section>
                </div>

                     <div className="col-md-4">
                    <section>
                    <img className="imgensInstituicoes" alt="scholl" src={imgFormacao}></img>
                    <h3>Centros de Formação</h3>
                    <p>São lugares onde fazemos determinadas formações  com o principal objectivo de obter  conhecimento para atender as demandas de uma determinada área.</p>
                    </section>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Instituicoes;