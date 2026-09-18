import whatsAppLogo from "../assets/iconswhatsapp.png";
import instagramLogo from "../assets/iconsinstagram.png";
import gitHubLogo from "../assets/iconsgithub.png";

function Contatos() {
    return (
        <div className="bg-zinc-500/5 flex justify-center items-center gap-10 md:gap-20 p-8 shadow-xl">
            <div>
                <p className="font-mono font-bold text-red-700">Desenvolvido por Márcio Bueno</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="font-mono font-bold text-red-700">Contatos</h2>
                <a href="" className="flex flex-row items-center justify-items-start gap-3 font-mono font-bold text-red-700">
                    <img src={whatsAppLogo} alt="" className="h-8 w-8"/>
                    WhatsApp
                </a>
                <a href="https://www.instagram.com/crimsonf0rg3/" className="flex flex-row items-center justify-items-start gap-3 font-mono font-bold text-red-700">
                    <img src={instagramLogo} alt="" className="h-8 w-8"/>
                    Instagram
                </a>
                <a href="https://github.com/marcinbuenoo" className="flex flex-row items-center justify-items-start gap-3 font-mono font-bold text-red-700">
                    <img src={gitHubLogo} alt="" className="h-8 w-8"/>
                    Github
                </a>
            </div>
        </div>
    )
}

export default Contatos;