import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import Home from './pages/Home/index'
import CadastroAdmFrota from './pages/CadastroAdmFrota/index'
import CadastroEmpresa from './pages/CadastroEmpresa/index'
import CadastroGeral from './pages/CadastroGeral/index'
import CadastroOfertas from './pages/CadastroOfertas/index'
import CadastroTipoUsuario from './pages/CadastroTipoUsuario/index'
import CadastroVeiculo from './pages/CadastroVeiculo/index'
import Login from './pages/Login/index'
import Privacidade from './pages/Privacidade/index'
import Produtos from './pages/Produtos/index'
// import Footer from 'components/Footer/'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopupCad from './components/PopupCad'
import PopupTexto from "./components/PopupTexto/index"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/cadastro/adm_frota' element={<CadastroAdmFrota />} />
        <Route path='/cadastro/empresa' element={<CadastroEmpresa />} />
        <Route path='/cadastro/geral' element={<CadastroGeral />} />
        <Route path='/cadastro/ofertas' element={<CadastroOfertas />} />
        <Route path='/cadastro/usuario' element={<CadastroTipoUsuario />} />
        <Route path='/cadastro/veiculo' element={<CadastroVeiculo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/privacidade' element={<Privacidade />} />
        <Route path='/produtos' element={<Produtos />} /> */}
        <Route path='/' element={<PopupCad />} />
        <Route path='/popup' element={<PopupTexto />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode >
)