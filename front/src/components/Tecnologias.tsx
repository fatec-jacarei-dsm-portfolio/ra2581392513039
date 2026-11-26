import tsLogo from "../assets/typescript-original.svg";
import reactLogo from "../assets/react-original.svg";
import tailwindLogo from "../assets/tailwindcss-original.svg";
import dockerLogo from "../assets/docker-plain.svg";
import flutterLogo from "../assets/flutter-original.svg";
import postgreLogo from "../assets/postgresql-original.svg";
import mongoLogo from "../assets/mongodb-original.svg";
import godotLogo from "../assets/godot-original.svg";

function Tecnologias() {
    return (
        <div id="tecnologias" className="scroll-mt-8 flex flex-col items-center justify-center gap-8 px-4 py-12 sm:px-8 md:py-20">
            <div>
                <h1 className="text-lg font-mono font-bold text-red-700">
                    Tecnologias
                </h1>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-2 gap-4 font-mono text-sm font-bold text-red-700 sm:grid-cols-3 sm:gap-8 sm:text-base lg:grid-cols-4 lg:gap-12">
                <a href="" className=" flex flex-col justify-center items-center gap-3 sm:gap-5 border-3 border-red-700 rounded-md p-4 sm:p-8 text-center shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={tsLogo} className="h-12 w-12 sm:h-15 sm:w-15" alt="" />
                    Typescript
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-3 sm:gap-5 border-3 border-red-700 rounded-md p-4 sm:p-8 text-center shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={reactLogo} className="h-12 w-12 sm:h-15 sm:w-15" alt="" />
                    React.js
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-3 sm:gap-5 border-3 border-red-700 rounded-md p-4 sm:p-8 text-center shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={tailwindLogo} className="h-12 w-12 sm:h-15 sm:w-15" alt="" />
                    Tailwind.css
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-3 sm:gap-5 border-3 border-red-700 rounded-md p-4 sm:p-8 text-center shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={dockerLogo} className="h-12 w-12 sm:h-15 sm:w-15" alt="" />
                    Docker
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-3 sm:gap-5 border-3 border-red-700 rounded-md p-4 sm:p-8 text-center shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={flutterLogo} className="h-12 w-12 sm:h-15 sm:w-15" alt="" />
                    Flutter
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-3 sm:gap-5 border-3 border-red-700 rounded-md p-4 sm:p-8 text-center shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={postgreLogo} className="h-12 w-12 sm:h-15 sm:w-15" alt="" />
                    PostgreSQL
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-3 sm:gap-5 border-3 border-red-700 rounded-md p-4 sm:p-8 text-center shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={mongoLogo} className="h-12 w-12 sm:h-15 sm:w-15" alt="" />
                    MongoDB
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-3 sm:gap-5 border-3 border-red-700 rounded-md p-4 sm:p-8 text-center shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={godotLogo} className="h-12 w-12 sm:h-15 sm:w-15" alt="" />
                    Godot
                </a>
            </div>
        </div>
    )
}

export default Tecnologias;
