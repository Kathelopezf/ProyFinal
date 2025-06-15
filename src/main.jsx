import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu.jsx';
import BarraTitulo from './BarraTitulo.jsx';
import Contenido from './Contenido.jsx';
import Footer from './Footer.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter >
      <BarraTitulo></BarraTitulo>
      <Menu></Menu>
      <Contenido></Contenido>
      <Footer></Footer>
    </BrowserRouter>,
)