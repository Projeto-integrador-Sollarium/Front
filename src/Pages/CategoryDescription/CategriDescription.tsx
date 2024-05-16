import { useNavigate, useParams } from "react-router-dom";
import Category from "../../Models/Category";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { find } from '../../Services/Service'; // Importar a função find

import { RevolvingDot } from 'react-loader-spinner'; // Importar o componente Dna
import { toastAlerta } from '../../utils/toastAlerta'; // Importar a função toastAlerta

function CategoryDescription() {
    const { id } = useParams<{ id: string }>()
    const [category, setCategory] = useState<Category | null>(null); // Ajuste da tipagem aqui
    const { user } = useContext(AuthContext);
    const token = user.token
    let navigate = useNavigate();

    async function findCategory() {
        try {
            await find(`/categories/${id}`, setCategory, {
                headers: { Authorization: token },
            });
            
        } catch (error: any) {
            toastAlerta('Algo deu errado', 'info');
        }
    }

    const handleNavigateBack = () => {
        navigate('/categories');
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        findCategory();
    }, [id]); // Adicionar categoryID como dependência do useEffect

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {category === null && (
                <RevolvingDot
                    visible={true}
                    height="200"
                    width="200"
                    color="#ffcb21"
                    ariaLabel="revolving-dot-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            {category !== null && (
                <>
                    <h1 className="text-3xl font-bold mb-8 ">{category.name}</h1>
                    <p className="text-center mb-8">{category.description}</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleNavigateBack}
                    >
                        Voltar para Categorias
                    </button>
                </>
            )}
        </div>
    );
}

export default CategoryDescription;
