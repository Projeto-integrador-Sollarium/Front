import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext';
import Product from '../../../Models/Product';
import { find, remove } from '../../../Services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';

function DeleteProduct() {
    const [product, setProduct] = useState<Product>({} as Product);
    const [showConfirmation, setShowConfirmation] = useState(false); // Novo estado para controlar a exibição do pop-up

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    async function findProductByID(id: string) {
        try {
            await find(`/products/${id}`, setProduct, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info');
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            findProductByID(id);
        }
    }, [id]);

    function retornar() {
        navigate("/products");
    }

    async function deleteProduct() {
        try {
            await remove(`/products/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            toastAlerta('Produto apagado com sucesso', 'sucesso');
        } catch (error) {
            toastAlerta('Erro ao apagar o Produto do Banco', 'erro');
        }
        retornar();
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Produto?</h1>

            <div className='border flex flex-col overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-blue-500 text-white font-bold text-2xl'>{product.name}</header>
                <div className="p-4">
                    <p className='mb-4 text-base text-neutral-800'>{product.description}</p>
                </div>
                <div className="flex justify-around mt-6">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-green-500 hover:bg-green-600 flex items-center justify-center' onClick={() => setShowConfirmation(true)}>
                        Sim
                    </button>
                </div>
            </div>

            {showConfirmation && ( // Renderizar o pop-up de confirmação
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                        <p className="text-xl mb-4">Tem certeza de que deseja excluir este produto?</p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => setShowConfirmation(false)}>
                                Cancelar
                            </button>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={deleteProduct}>
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeleteProduct;
