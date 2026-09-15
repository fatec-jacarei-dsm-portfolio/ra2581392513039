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
        <div className="flex  items-center justify-center flex-col gap-25">
            <div>
                <h1 className="text-lg font-mono font-bold text-red-700">
                    Tecnologias
                </h1>
            </div>
            <div className="flex grid grid-cols-4 gap-20 font-mono font-bold text-red-700 p-30">
                <a href="" className=" flex flex-col justify-center items-center gap-5 border-3 border-red-700 rounded md p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={tsLogo} className="h-15 w-15" alt="" />
                    Typescript
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-5 border-3 border-red-700 rounded md p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={reactLogo} className="h-15 w-15" alt="" />
                    React.js
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-5 border-3 border-red-700 rounded md p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={tailwindLogo} className="h-15 w-15" alt="" />
                    Tailwind.css
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-5 border-3 border-red-700 rounded md p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={dockerLogo} className="h-15 w-15" alt="" />
                    Docker
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-5 border-3 border-red-700 rounded md p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={flutterLogo} className="h-15 w-15" alt="" />
                    Flutter
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-5 border-3 border-red-700 rounded md p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={postgreLogo} className="h-15 w-15" alt="" />
                    PostgreSQL
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-5 border-3 border-red-700 rounded md p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={mongoLogo} className="h-15 w-15" alt="" />
                    MongoDB
                </a>
                <a href="" className=" flex flex-col justify-center items-center gap-5 border-3 border-red-700 rounded md p-8 shadow-xl inset-shadow-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img src={godotLogo} className="h-15 w-15" alt="" />
                    Godot
                </a>
            </div>
        </div>
    )
}

export default Tecnologias;