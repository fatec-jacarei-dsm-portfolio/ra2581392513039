import profilePhoto from "../assets/profile.jpeg";

function SobreMim() {
    return (
        <div className="flex p-60 justify-center items-center gap-10">
            <p className="text-justify font-mono font-bold text-red-700"> 
                Olá, me chamo Márcio e sou Desenvolvedor de Software. Sou fã de computadores e e jogos desde pequeno, <br /> oque me fez ter interesse em programção
                Hoje sou graduando no curso de Desenvolvimento de Software Multiplataforma <br />pela FATEC Jacareí. Sou proficiente em front-end, back-end e na área de dados.
            </p>
            <img className="float-right rounded-md h-70 w-70 shadow-xl" src={profilePhoto} alt="" />
        </div>
    )
}

export default SobreMim;