import "../style/header.css"

export default function Header() {

        return (
            <header>
                <div className="logo">
                    <img src="../public/logo.jpeg" alt="logo" />
                </div>
                <div className="header-container">
                    <a href="#sobre">Sobre</a>
                    <a href="#tecnologias">Tecnologias</a>
                    <a href="#projects">Projetos</a>
                    <a href="https://www.linkedin.com/in/marcio-roberto-bueno-junior-02a2a4248/">Contato</a>
                </div>
            </header>
        )
    }