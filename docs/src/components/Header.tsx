import crimsonForgeLogo from "../assets/crimsonForgeLogo.jpeg";

function Header() {
    return (
        <div className="bg-zinc-500/5 flex justify-center items-center gap-20 p-8 shadow-xl">
            <img src={crimsonForgeLogo} className="h-13 w-13 object-contain"/>
            <a href="" className="text-lg font-mono font-bold text-red-700 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">Sobre mim</a>
            <a href="" className="text-lg font-mono font-bold text-red-700 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">Tecnologias</a>
            <a href="" className="text-lg font-mono font-bold text-red-700 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">Projetos</a>
            <a href="" className="text-lg font-mono font-bold text-red-700 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">Contato</a>
        </div>
    )
}

export default Header;  