import "./Home.css"
import "../cursos/Cursos"
import Contactos from "../cursos/Cursos"
import Instituicoes from "../Instituiçoes/Instituicoes"
import Parceiros from "../Parceiros/Parceiros"




function Home(){
    return(
        <>
        <div className="container-fluid inicio">
            <div className="row">
                <div className="col-12 text-md-start text-center py-5 d-flex-none ms-md-4 conteudo">
                    <h1 className="animate__animated animate__bounceInDown animate__slow">Bem vindo ao <span>EduMap</span></h1>
                    <h6 className="animate__animated animate__fadeInLeftBig animate__slow">Encontre, explore e conecte-se às melhores instituições, cursos e oportunidades de ensino!</h6>
                    <p className="animate__animated animate__fadeInRight animate__slow">Este sistema veio para facilitar o acesso à informação sobre instituições de ensino e seus cursos.</p>
                    <button className=" btn btn-primary btnEnviar animate__animated animate__bounceInUp animate__slow ">Cadastra-se</button>
                </div>
            </div>

        </div>
        <Contactos/>
        <Instituicoes/>
        <Parceiros/>
        
        </>
    )
}

export default Home

