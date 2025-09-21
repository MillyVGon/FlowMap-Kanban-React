import { BrowserRouter, Routes, Route } from "react-router-dom"
import StoreProvider from "../Store/Provider"
import RoutesPrivate from './Private/Private'

import Home from "../pages/Home"
import Servicos from "../pages/Servicos"
import Assinaturas from "../pages/Assinaturas"
import Kanban from "../pages/Kanban"
import Sobre from "../pages/Sobre"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Router() {
    return (
        <>
        <BrowserRouter>
            <StoreProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Servicos" element={<Servicos />} />
                    <Route path="/Assinaturas" element={<Assinaturas />} />
                    <Route element={<RoutesPrivate />}>
                        <Route path="/Kanban" element={<Kanban />} />
                    </Route>
                    <Route path="/Sobre" element={<Sobre />} />
                    <Route path="/Entrar" element={<Login />} />
                    <Route path="/Criar-Conta" element={<Signup />} />
                </Routes>
                <Footer />
            </StoreProvider>
        </BrowserRouter>
        </>
    )
}