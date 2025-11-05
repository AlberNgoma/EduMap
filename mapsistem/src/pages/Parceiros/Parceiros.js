import "./Parceiros.css"
import client1 from "../../assets/clients-1.webp"
import client2 from "../../assets/clients-2.webp"
import client3 from "../../assets/clients-3.webp"
import client4 from "../../assets/clients-4.webp"
import client5 from "../../assets/clients-5.webp"
import client6 from "../../assets/clients-6.webp"

function Parceiros(){
    return(
        <>
    <div className="container-fluid parceirosContainer">
         <h1 className="titulo animate__animated animate__bounceInDown animate__slow">PARCEIROS</h1>
            <h4 className="animate__animated animate__bounceInUp fast parceirosDescribe">A EduMap conta com vários parceiros desde instituições de ensino e empresas.</h4>
        <div className="container parceiros">
            <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <div className="row">
                            <div className="col-3">
                                <img className="imagemParceiros img-fluid" src={client1}></img>
                            </div>

                                <div className="col-3">
                                <img className="imagemParceiros img-fluid" src={client5}></img>
                            </div>

                                <div className="col-3">
                                <img className="imagemParceiros img-fluid" src={client3}></img>
                            </div>

                                <div className="col-3">
                                <img className="imagemParceiros img-fluid" src={client2}></img>
                            </div>
                        </div>
                    </div>

                        <div className="carousel-item" data-bs-interval="1000">
                        <div className="row">
                            <div className="col-3">
                                <img className="imagemParceiros img-fluid" src={client6}></img>
                            </div>

                                <div className="col-3">
                                <img className="imagemParceiros img-fluid" src={client1}></img>
                            </div>

                                <div className="col-3">
                                <img className="imagemParceiros img-fluid" src={client3}></img>
                            </div>

                                <div className="col-3">
                                <img className="imagemParceiros img-fluid" src={client5}></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
        </>
    )
}


export default Parceiros;