function Contato(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold" >
            <h2 className="text-slate-900">Fale Conosco</h2>
            <p>Entre em contato conosco preenchendo o formulário abaixo.</p>
            <form>
                <div className="flex flex-col w-full">
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text"
                        id="none"
                        name="nome"
                        placeholder="Nome"
                        className="border-2 border-slate-700 rounded"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="border-2 border-slate-700 rounded"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="assunto">Assunto</label>
                    <input 
                        type="text"
                        id="assunto"
                        name="assunto"
                        placeholder="Assunto"
                        className="border-2 border-slate-700 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="mensagem ">Mensagem </label>
                    <textarea></textarea>
                </div>
                <div>
                    <button className="rounded">
                        Enviar
                    </button>

                    <button className="rounded">
                        Voltar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contato;