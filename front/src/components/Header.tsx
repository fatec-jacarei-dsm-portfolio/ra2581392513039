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
                    Sobre
                </div>
                <div>
                    Tecnologias
                </div>
                <div>
                    Projetos
                </div>
                <div>
                    Contato
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
    border: "1px #000 solid",
    padding: "20px",
    color: "#040404",
    fontFamily: "Arial",
    fontWeight: "600"
}

const ImgStld: CSSProperties = {
    height: "40px"
}

const ContainerStld: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px"
}

