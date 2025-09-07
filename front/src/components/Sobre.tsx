import "../style/sobre.css"

export default function Sobre() {

    return (
        <main>
            <div className="text">
                <h2>Márcio Roberto Bueno Junior</h2>
                <p>
                    Estudante de Desenvolvimento de Software Multiplataforma, natural de Jacareí/SP.<br></br>  
                    Busco crescimento profissional e acadêmico com enfâse em ambientes de <br/> 
                    desenvolvimento de software com metodologias agéis e conceitos sólidos <br/>
                    de modelagem e arquitetura de software. <br />
                    <br />
                    Tem uma ídeia de aplicação ou projeto? Posso te ajudar a concretizá-lo <br />
                    entregando soluções escaláveis. Entre em contato para nos conectarmos.
                </p>
            </div>
            <div className="sobre-foto">
                <img src="../public/FotoPerfil.jpeg" alt="foto" />
            </div>
        </main>
    )
}