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
        <div className="flex items-center justify-center flex-col gap-8 p-10">
            <h1 className="text-lg font-mono font-bold text-red-700 p-15">
                Projetos
            </h1>
            <div id="projetos-list" 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols4 gap-8 
            w-full max-w-6xl mx-auto px-4" >
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