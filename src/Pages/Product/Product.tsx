import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import Product from '../../Models/Product';
import { find } from '../../Services/Service';
import { ColorRing } from 'react-loader-spinner';
import Popup from 'reactjs-popup';
import FormProduct from '../../Components/Products/FormProducts/FormProducts'; // Corrigindo o caminho de importação


function ProductPage() {
    const { addProduct, removeProduct, user } = useContext(AuthContext);
    const { id } = useParams<{ id: string }>();
    const token = user.token;
    let navigate = useNavigate();

    const [product, setProduct] = useState<Product>({
        id: 0,
        name: '',
        inventory: 0,
        price: 0,
        description: '',
        photo: '',
        category: null
    });

    // State para controlar a abertura e fechamento do modal de edição
    const [openEditModal, setOpenEditModal] = useState(false);

    async function findProductByID(id: string) {
        await find(`/products/${id}`, setProduct, {
            headers: {
                Authorization: token,
            },
        });
    }

    const handleNavigateBack = () => {
        navigate('/products');
    }

    // Função para abrir o modal de edição
    const openEditModalHandler = () => {
        setOpenEditModal(true);
    }

    useEffect(() => {
        if (id !== undefined) {
            findProductByID(id);
        }
    }, [id]);

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <>
        <div className="flex justify-center items-center">
            {product.id === 0 && (
                <ColorRing
                    visible={true}
                    height="300"
                    width="300"
                    colors={['#FF3232', '#FF5A5A', '#d5e4f5', '#8399E8', '#4D73FD']}
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                />
            )}
        </div>
        
        {product.id !== 0 && (
            <div className="container mx-auto mt-4">
                <div className="flex">
                    <div className="w-1/2">
                        <img src={product.photo} alt="Product Photo" className="w-full h-auto" />
                    </div>
                    <div className="w-1/2 px-4">
                        <div className="font-bold text-3xl mb-4">{product.name}</div>
                        <div className="text-gray-700 text-lg mb-4">{product.description}</div>
                        <div className="text-gray-800 text-2xl mb-4 font-bold">R${product.price}</div>
                        <div className="flex gap-4 justify-self-end ">
                        {user.id === 1 ? (
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={openEditModalHandler} // Chama a função para abrir o modal de edição
                            >
                                Editar
                            </button> ) : null }
                            {user.id === 1 ? (
                                <>
                                    <Link to={`/deleteProduct/${product.id}`} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                        Deletar
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={() => addProduct(product)}
                                    >
                                        Adicionar ao carrinho
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={() => removeProduct(product.id)}
                                    >
                                        Remover do carrinho
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-end mb-6">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={handleNavigateBack}>
                        Voltar
                    </button>
                </div>
            </div>
        )}

        {/* Modal de edição */}
        <Popup open={openEditModal} onClose={() => setOpenEditModal(false)} modal>
            <FormProduct closeModal={() => setOpenEditModal(false)} initialProduct={product} />
        </Popup>
    </>
    );
}

export default ProductPage;
