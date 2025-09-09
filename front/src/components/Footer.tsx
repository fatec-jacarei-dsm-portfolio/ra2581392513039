import "../style/footer.css"

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-icons">
                <a href="">
                    <img src="../public/icons8-instagram-logo.svg" alt="Instagram" />
                </a>
                <a href="">
                    <img src="../public/icons8-github.svg" alt="GitHub" />
                </a>
                <a href="">
                    <img src="../public/icons8-linkedin.svg" alt="LinkedIn" />
                </a>
            </div>
            <div className="footer-text">
                <p>Desenvolvido por Márcio Bueno</p>
            </div>
        </div>
    )
}