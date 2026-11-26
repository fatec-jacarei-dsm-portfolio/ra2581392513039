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
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-8 px-6 py-12 sm:px-10 sm:py-20 md:flex-row md:gap-10 lg:px-20 lg:py-32">
            <p aria-label={aboutText} className="text-left font-mono text-sm font-bold text-red-700 sm:text-base md:text-justify">
                <span aria-hidden="true">{typedText}</span>
                <span aria-hidden="true" className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-red-700" />
            </p>
            <img className="h-48 w-48 shrink-0 rounded-md object-cover shadow-xl sm:h-60 sm:w-60 md:h-70 md:w-70 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100" src={profilePhoto} alt="" />
        </div>
    );
}

export default SobreMim;
