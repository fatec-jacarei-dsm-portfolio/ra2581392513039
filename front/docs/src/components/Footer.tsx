import "../style/footer.css"

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-icons">
                <a href="https://www.instagram.com/thech0sen0n3_">
                    <img src="../public/icons8-instagram-logo.svg" alt="Instagram" />
                </a>
                <a href="https://github.com/MarcioBuenoo">
                    <img src="../public/icons8-github.svg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/marcio-roberto-bueno-junior-02a2a4248">
                    <img src="../public/icons8-linkedin.svg" alt="LinkedIn" />
                </a>
            </div>
            <div className="footer-text">
                <p>Desenvolvido por Márcio Bueno</p>
            </div>
        </div>
    )
}