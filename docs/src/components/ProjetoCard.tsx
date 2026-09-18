import type {Projeto} from "../types/projeto"

type ProjetoCardProps = {
    projeto: Projeto;
}

function ProjetoCard( {projeto}: ProjetoCardProps) {
    return (
        <div className="card">
            <img src={projeto.img} alt={projeto.titulo} />
            <div className="card-content">
                <h3>{projeto.titulo}</h3>
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