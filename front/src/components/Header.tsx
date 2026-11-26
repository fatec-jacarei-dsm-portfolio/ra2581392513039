import crimsonForgeLogo from "../assets/crimsonForgeLogo.jpeg";

function Header() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-start bg-zinc-500/5 p-4 shadow-xl sm:gap-x-10 sm:p-6">
            <img src={crimsonForgeLogo} className="h-13 w-13 object-contain" alt="Logo Crimson Forge" />
            <a href="#formacao" className="font-mono text-base sm:text-lg font-bold text-red-700 transition duration-300 hover:-translate-y-1">Formação</a>
            <a href="#projetos" className="font-mono text-base sm:text-lg font-bold text-red-700 transition duration-300 hover:-translate-y-1">Projetos</a>
            <a href="#contatos" className="font-mono text-base sm:text-lg font-bold text-red-700 transition duration-300 hover:-translate-y-1">Contato</a>
        </div>
    )
}

export default Header;  
