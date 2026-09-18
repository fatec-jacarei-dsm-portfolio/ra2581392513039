import type {Projeto} from "../types/projeto"

type ProjetoCardProps = {
    projeto: Projeto;
}

function ProjetoCard( {projeto}: ProjetoCardProps) {
    return (
        <div className="border-2 border-red-700 rounded-xl p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
            <img src={projeto.img} alt={projeto.titulo} />
            <div className="flex flex-col gap-2 justify-center p-4">
                <h3 className="font-mono font-bold text-red-600">{projeto.titulo}</h3>
                <p className="font-mono text-red-700">{projeto.descricao}</p>
                <span className="font-mono text-red-700">{projeto.tecnologias}</span>
                <a className="font-mono font-bold text-red-800" href={projeto.link} target="_blank" rel="noreferrer">
                    Ver Projeto.
                </a>
            </div>
        </div>
    )
}

export default ProjetoCard;