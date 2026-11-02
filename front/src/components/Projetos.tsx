import type { Projeto } from "../types/projeto";
import ProjetoCard from "./ProjetoCard";
import imgFatrek from "../assets/imgFatrek.png";
import imgWantedBooks from "../assets/imgWantedBooks.png";
import imgInpe from "../assets/imgInpe.png";
import img1000Vale from "../assets/img1000Vale.png";

const categorias: { titulo: string; projetos: Projeto[] }[] = [
    {
        titulo: "Acadêmicos",
        projetos: [
            {
                titulo: "FATREK - ABP 1a Semestre",
                descricao: "Site para consulta de horários e localização de salas na FATEC Jacareí",
                tecnologias: "HTML - CSS - JavaScript - PostgreSQL",
                link: "https://github.com/CRIMS0NC0DE/abp-2025-1",
                img: imgFatrek,
                id: "fatrek",
            },
            {
                titulo: "Portal INPE - ABP 2a Semestre",
                descricao: "Aplicação web para visualização dos dados limnológicos do INPE",
                tecnologias: "Typescript - React - PostgreSQL - Docker",
                link: "https://github.com/CRIMS0NC0DE/abp-2025-21",
                img: imgInpe,
                id: "inpe",
            },
            {
                titulo: "CRM 1000Valle - ABP 3a Semestre",
                descricao: "CRM para gerenciamento de leads de uma concessionária de veículos",
                tecnologias: "Typescript - React - PostgreSQL - Docker",
                link: "https://github.com/CRIMS0NC0DE/3DSM-ABP-2026-1",
                img: img1000Vale,
                id: "1000vale",
            },
        ],
    },
    {
        titulo: "Pessoais",
        projetos: [
            {
                titulo: "wantedBooks",
                descricao: "Aplicação web para backlog, review e promoção de livros",
                tecnologias: "HTML - CSS - JavaScript - PostgreSQL",
                link: "https://github.com/MarcioBuenoo/wantedBooks",
                img: imgWantedBooks,
                id: "wantedBooks",
            },
        ],
    },
    {
        titulo: "Profissionais",
        projetos: [

        ],
    },
];

function Projetos() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 p-10">
            <h1 className="p-15 font-mono text-lg font-bold text-red-700">
                Projetos
            </h1>
            <div
                id="projetos-list"
                className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 xl:grid-cols-3"
            >
                {categorias.map((categoria) => (
                    <section key={categoria.titulo} className="flex flex-col gap-5">
                        <h2 className="text-center font-mono text-xl font-bold text-red-700">
                            {categoria.titulo}
                        </h2>
                        <div className="flex flex-col gap-6">
                            {categoria.projetos.map((projeto) => (
                                <ProjetoCard key={projeto.id} projeto={projeto} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Projetos;
