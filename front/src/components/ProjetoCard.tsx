import type {Projeto} from "../types/projeto"

type ProjetoCardProps = {
    projeto: Projeto;
}

function ProjetoCard( {projeto}: ProjetoCardProps) {
    return (
        <div className="flex h-[32rem] flex-col rounded-xl border-2 border-red-700 p-6 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
            <img className="h-48 w-full shrink-0 rounded-md object-contain" src={projeto.img} alt={projeto.titulo} />
            <div className="flex min-h-0 flex-1 flex-col gap-2 p-4">
                <h3 className="font-mono font-bold text-red-600">{projeto.titulo}</h3>
                <p className="font-mono text-red-700">{projeto.descricao}</p>
                <span className="font-mono text-red-700">{projeto.tecnologias}</span>
                <a className="mt-auto pt-2 font-mono font-bold text-red-800" href={projeto.link} target="_blank" rel="noreferrer">
                    Ver Projeto.
                </a>
            </div>
        </div>
    )
}

export default ProjetoCard;
