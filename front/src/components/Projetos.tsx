import type { Projeto } from "../types/projeto";
import ProjetoCard from "./ProjetoCard";
import imgFatrek from "../assets/imgFatrek.png";
import imgWantedBooks from "../assets/imgWantedBooks.png";
import imgInpe from "../assets/imgInpe.png";
import img1000Vale from "../assets/img1000Vale.png";
import imgeFuelz from "../assets/eFuelz.jpeg";
import imageControleNFC from "../assets/controleNFC.png";
import imageStairwayToTony from "../assets/imageTony.png";

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
            {
                titulo: "Controle de acesso por QR e NFC",
                descricao: "Sistema de controle de acesso utilizando ESP32 + Flutter/Dart",
                tecnologias: "Flutter - Dart - C++ - ESP32 - NFC",
                link: "https://github.com/CRIMS0NC0DE/4DSM-ABP-2026-2",
                img: imageControleNFC,
                id: "controleNFC"
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
            {
                titulo: "e-Fuelz",
                descricao: "Aplicação para acompanhar desempenho do carro. Abastecimento x KM rodado",
                tecnologias: "Flutter - Dart - RestAPI",
                link: "https://github.com/marcinbuenoo/efuelz",
                img: imgeFuelz,
                id: "eFuelz",
            },
        ],
    },
    {
        titulo: "Profissionais",
        projetos: [
            {
                titulo: "StairwayToTony",
                descricao: "Jogo de plataforma onde você controla um cão chamado Tony",
                tecnologias: "Godot - GDscript",
                link: "https://github.com/marcinbuenoo/StairwayToTony",
                img: imageStairwayToTony,
                id: "stairwayToTony",
            },
        ],
    },
];

function Projetos() {
    return (
        <div id="projetos" className="scroll-mt-8 flex flex-col items-center justify-center gap-8 p-10">
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
