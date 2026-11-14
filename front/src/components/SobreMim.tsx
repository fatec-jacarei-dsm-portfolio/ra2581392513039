import { useEffect, useState } from "react";
import profilePhoto from "../assets/profile.jpeg";

const aboutText =
    "Olá, me chamo Márcio e sou Desenvolvedor de Software. Sou fã de computadores e jogos desde pequeno, o que me fez ter interesse em programação. Hoje sou graduando no curso de Desenvolvimento de Software Multiplataforma pela FATEC Jacareí. Sou proficiente em front-end, back-end e na área de dados, além de ser um grande entusiasta de Linux e HomeLab.";

function SobreMim() {
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        const characters = Array.from(aboutText);
        let index = 0;
        const timer = window.setInterval(() => {
            index += 1;
            setTypedText(characters.slice(0, index).join(""));
            if (index >= characters.length) window.clearInterval(timer);
        }, 20);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <div className="flex p-40 justify-center items-center gap-10">
            <p aria-label={aboutText} className="text-justify font-mono font-bold text-red-700">
                <span aria-hidden="true">{typedText}</span>
                <span aria-hidden="true" className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-red-700" />
            </p>
            <img className="float-right rounded-md h-70 w-70 shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100" src={profilePhoto} alt="" />
        </div>
    );
}

export default SobreMim;
