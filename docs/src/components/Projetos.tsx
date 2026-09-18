import type {Projeto} from "../types/projeto";
import ProjetoCard from "./ProjetoCard";
import imgFatrek from "../assets/imgFatrek.png";
import imgWantedBooks from "../assets/imgWantedBooks.png";

const projetos: Projeto[] = [
    {
        titulo: "FATREK",
        descricao: "Site para consulta de horários e localização de salas na FATEC Jacareí",
        tecnologias: "HTML - CSS - JavaScript - PostgreSQL",
        link: "https://fatreck.ct.ws/?i=1",
        img: imgFatrek,
        id: "fatrek"
    },
    {
        titulo: "wantedBooks",
        descricao: "Aplicação web para backlog, review e promoção de livros",
        tecnologias: "HTML - CSS - JavaScript - PostgreSQL",
        link: "https://github.com/MarcioBuenoo/wantedBooks",
        img: imgWantedBooks,
        id: "wantedBooks"
    }
]

function Projetos() {
    return (
        <div>
            <h1>
                Projetos
            </h1>
            <div id="projetos-list">
                {projetos.map((projeto) => (
                <ProjetoCard
                    key={projeto.id}
                    projeto={projeto}
                />
                ))}
            </div>
        </div>
    )
}

export default Projetos;