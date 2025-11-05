import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home"
import Cursos from "./pages/cursos/Cursos"
import Instituicoes from "./pages/Instituiçoes/Instituicoes";
import Parceiros from "./pages/Parceiros/Parceiros"





function AppRoutes(){
    return(
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cursos" element={<Cursos/>}></Route>
        <Route path="/Instituições" element={<Instituicoes/>}></Route>
        <Route path="/Parceiros" element={<Parceiros/>}></Route>
        <Route path="/*"element={<h1>404 Page not found</h1>}></Route>

        </Routes>
    )
}

export default AppRoutes;
