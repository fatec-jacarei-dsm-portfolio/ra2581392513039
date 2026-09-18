import Contatos from "./components/Contatos";
import Header from "./components/Header"
import Projetos from "./components/Projetos";
import SobreMim from "./components/SobreMim";
import Tecnologias from "./components/Tecnologias";

function App() {
  return (
    <>
      <Header></Header>
      <SobreMim></SobreMim>
      <Tecnologias></Tecnologias>
      <Projetos></Projetos>
      <Contatos></Contatos>
    </>
  )
}

export default App;