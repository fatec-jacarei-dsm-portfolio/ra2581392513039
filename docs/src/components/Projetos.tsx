import Projeto from "../types/projeto";

const projetos: Projeto[] = [
    {
        titulo: "FATREK",
        descricao: "Site para consulta de horários e localização de salas na FATEC Jacareí",
        tecnologias: "HTML - CSS - JavaScript - PostgreSQL",
        link: "https://fatreck.ct.ws/?i=1",
        img: "../assets/imgFatrek.png"
    },
    {
        titulo: "wantedBooks",
        descricao: "Aplicação web para backlog, review e promoção de livros",
        tecnologias: "HTML - CSS - JavaScript - PostgreSQL",
        link: "https://github.com/MarcioBuenoo/wantedBooks",
        img: "../assets/imgWantedBooks.png"
    }
]

function Projetos() {
    return (
        <div>
            <h1>
                Projetos
            </h1>
            <div id="projetos-list">

            </div>
        </div>
    )
}

export default Projetos;