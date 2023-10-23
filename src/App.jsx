import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/listar/ListarPessoas";
import Atualizar from "./pages/atualizar/AtualizarCadastro";
import Cadastro from "./pages/cadastrar/Cadastro";
import "./styles/global.css";
import "@fontsource/inter";

function App() {
  return (
    <div className="w-full min-h-screen">
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Atualizar" element={<Atualizar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
