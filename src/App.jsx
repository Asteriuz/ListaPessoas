import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/listar/ListarPessoas';
import Joker from './pages/listar/ListarPessoas2';
import Atualizar from './pages/atualizar/AtualizarCadastro';
import Cadastro from './pages/cadastrar/Cadastro';
import './styles/global.css';


function App(){
  return (
    <div className="w-full min-h-screen">
      {/* <Home/> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/2" element={<Joker/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/Atualizar" element={<Atualizar/>}/>
        
      </Routes>
     </BrowserRouter>
    </div>
    )
}

export default App;