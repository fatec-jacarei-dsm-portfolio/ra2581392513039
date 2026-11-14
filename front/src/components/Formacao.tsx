function Formacao() {
    return (
        <section id="formacao" className="flex flex-col items-center gap-6 px-8 py-16">
            <h1 className="font-mono text-lg font-bold text-red-700">
                Formação Acadêmica
            </h1>
            <article className="w-full max-w-3xl rounded-xl border-2 border-red-700 p-8 font-mono text-red-700 shadow-xl">
                <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
                        <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
                        <path d="M22 10v6" />
                    </svg>
                    <h2 className="text-xl font-bold">
                        Desenvolvimento de Software Multiplataforma
                    </h2>
                </div>
                <p className="mt-2">FATEC Jacareí</p>
                <p className="mt-1">Cursando - 2025-2027</p>
            </article>
        </section>
    );
}

export default Formacao;
