import { useNavigate, useParams, Link } from "react-router-dom";
import Category from "../../Models/Category";
import { useContext, useEffect, useState } from "react";
import { findLoggedOut, searchProducts } from '../../Services/Service'; // Importar a função find

import { ColorRing } from 'react-loader-spinner'; // Importar o componente Color Ring
import { toastAlerta } from '../../utils/toastAlerta'; // Importar a função toastAlerta
import Product from "../../Models/Product";
import CardProduct from "../../Components/Products/CardProducts/CardProducts";
import { AuthContext } from "../../Contexts/AuthContext";
import Popup from 'reactjs-popup';
import FormCategories from '../../Components/Categorias/FormCategories/FormCategories';

function CategoryDescription() {
    const { id } = useParams<{ id: string }>();
    const [category, setCategory] = useState<Category | null>(null); // Ajuste da tipagem aqui
    const [products, setProducts] = useState<Product[]>([]);
    let navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);

    async function findCategory() {
        try {
            await findLoggedOut(`/categories/${id}`, setCategory);
        } catch (error: any) {
            toastAlerta('Algo deu errado', 'info');
        }
    }

    async function findProducts() {
        try {
            await searchProducts('/products', setProducts);
        } catch (error: any) {
            toastAlerta('Algo deu errado', 'erro');
        }
    }

    useEffect(() => {
        findCategory();
        findProducts();
    }, [id]);

    const handleNavigateBack = () => {
        navigate('/categories');
    };

    const filteredProducts = category ? products.filter(product => product.category.name === category.name) : [];

    return (
        <div className='flex w-200 h-200 justify-center items-center'>
            <div className="flex">
                {category === null && (
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
            {category !== null && (
                <>
                    <div className="flex flex-col px-4 sm:px-2 md:px-4 lg:px-8">
                        <div className="flex justify-center">
                            <h1 className="text-4xl font-bold m-4 sm:m-2 md:m-6 lg:m-10">{category.name}</h1>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-center mt-2 mb-8 mx-4 sm:mx-2 md:mx-6 lg:mx-10 text-xl sm:text-lg md:text-xl">{category.description}</p>
                        </div>
                        {user.id === 1 && ( // Verifica se o usuário é o administrador
                            <div className="flex justify-center">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-5"
                                    onClick={() => setOpenModal(true)}>
                                    Editar Categoria
                                </button>
                                <Link to={`/deleteCategory/${category.id}`} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-5">
                                    Deletar Categoria
                                </Link>
                            </div>
                        )}
                        <div className="flex justify-center">
                            <h1 className="text-3xl font-bold m-10">Produtos {category.name}</h1>
                        </div>

                        <div className='flex flex-col'>
                            <div className="flex justify-center w-full my-4">
                                <div className="container flex justify-center">
                                    <div className="flex flex-wrap justify-center gap-8">
                                        {filteredProducts.map((product) => (
                                            <CardProduct key={product.id} product={product} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
                                onClick={handleNavigateBack}>
                                Voltar para Categorias
                            </button>
                        </div>
                    </div>
                </>
            )}
            {/* Modal de edição */}
            <Popup
                open={openModal}
                onClose={() => setOpenModal(false)}
                modal
                closeOnDocumentClick={true}
                overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
                contentStyle={{ borderRadius: '1rem', paddingBottom: '2rem' }}
            >
                <div>
                    <FormCategories closeModal={() => setOpenModal(false)} initialCategory={category} />
                </div>
            </Popup>
        </div>
    );
}

export default CategoryDescription;
