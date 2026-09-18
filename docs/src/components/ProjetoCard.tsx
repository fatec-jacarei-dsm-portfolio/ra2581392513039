import type {Projeto} from "../types/projeto"

type ProjetoCardProps = {
    projeto: Projeto;
}

function ProjetoCard( {projeto}: ProjetoCardProps) {
    return (
        <div className="border-3 border-red-700 rounded md p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
            <img src={projeto.img} alt={projeto.titulo} />
            <div className="flex flex-col gap-2 justify-center">
                <h3 className="font-mono font-bold text-red-700">{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <span className="projetos-tecnologias">{projeto.tecnologias}</span>
                <a href={projeto.link} target="_blank" rel="noreferrer">
                    Ver Projeto.
                </a>
            </div>
        </div>
    )
}

export default ProjetoCard;