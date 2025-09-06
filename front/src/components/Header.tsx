import type { CSSProperties } from "react"

export default function Header() {

    return (
        <header style={HeaderStld}>
            <div className="logo">
                <div>
                    <img src="../public/logo.jpeg" alt="logo" style={ImgStld}/>
                </div>
            </div>
            <div className="header-container" style={ContainerStld}>
                <div>
                    <a href="">Sobre</a>
                </div>
                <div>
                    <a href="">Tecnologias</a>
                </div>
                <div>
                    <a href="">Projetos</a>
                </div>
                <div>
                    <button style={ContatoStld}>Contato</button>
                </div>
            </div>
        </header>
    )
}

const HeaderStld: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    border: "1px #272727 solid",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
    padding: "20px",
    color: "#040404",
    fontFamily: "Arial",
    fontWeight: "600",
    fontSize: "18px",
}

const ImgStld: CSSProperties = {
    height: "40px"
}

const ContainerStld: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    textDecoration: "none"
}

const ContatoStld: CSSProperties = {
    display: "flex",
    padding: "10px",
    border: "1px #7A0407 solid",
    borderRadius: "20px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#940409",
    fontFamily: "Arial",
    fontWeight: "600",
    fontSize: "18px",
    cursor: "pointer"
}
