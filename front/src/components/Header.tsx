import "../style/header.css"

export default function Header() {

        return (
            <header>
                <div className="logo">
                    <img src="../public/logo.jpeg" alt="logo" />
                </div>
                <div className="header-container">
                    <a href="">Sobre</a>
                    <a href="#tecnologias">Tecnologias</a>
                    <a href="">Projetos</a>
                    <button>Contato</button>
                </div>
            </header>
        )
    }