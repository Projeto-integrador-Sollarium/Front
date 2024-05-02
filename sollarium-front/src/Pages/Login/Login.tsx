import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
            <form className="flex justify-center items-center flex-col w-1/2 gap-4">
                <h2 className="text-slate-900 text-5x1">Entrar</h2>
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

                <button type='submit' className="rounded bg-cyan-500 hover:bg-cyan-900 text-white w-1/2 py-2 flex justify-center">
                    <span>Entrar</span>
                </button>

                <hr className="border-slate-800 w-full"/> 

                <p>
                        Ainda não tem uma conta? {' '}
                        <Link to="/Cadastro" className="text-cyan-800 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
            </form>
        </div>
    )
}

export default Login;