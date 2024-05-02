function Cadastro(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
            <form className="flex justify-center items-center flex-col w-1/2 gap-4">
                <h2 className="text-slate-900 text-5x1">Cadastre-se</h2>
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Nome</label>
                    <input 
                        type="text"
                        id="name"
                        name="name" 
                        placeholder="Name"   
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        id="email"
                        name="email" 
                        placeholder="Email"   
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="user">Senha</label>
                    <input 
                        type="text"
                        id="password"
                        name="password" 
                        placeholder="Password"   
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col w-full">
                <label htmlFor="address">Endereço</label>
                    <input 
                        type="text"
                        id="address"
                        name="address" 
                        placeholder="Address"   
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col w-full">
                <label htmlFor="phone">Telefone</label>
                    <input 
                        type="text"
                        id="phone"
                        name="phone" 
                        placeholder="Phone"   
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col w-full">
                <label htmlFor="photo">Foto</label>
                    <input 
                        type="text"
                        id="photo"
                        name="photo" 
                        placeholder="Photo"   
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex justify-around w-full gap-8">
                    <button type='submit' className="rounded bg-red-400 hover:bg-red-500 text-white w-1/2 py-2 flex justify-center">
                        <span>Cancelar</span>
                    </button>

                    <button type='submit' className="rounded bg-cyan-500 hover:bg-cyan-900 text-white w-1/2 py-2 flex justify-center">
                        <span>Cadastrar</span>
                    </button>
                </div> 

            </form>
        </div>
    )
}

export default Cadastro;