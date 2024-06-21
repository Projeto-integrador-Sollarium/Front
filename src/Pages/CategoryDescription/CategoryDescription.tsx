import { useNavigate, useParams } from "react-router-dom";
import Category from "../../Models/Category";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { find, searchProducts } from '../../Services/Service'; // Importar a função find

import { ColorRing } from 'react-loader-spinner'; // Importar o componente Color Ring
import { toastAlerta } from '../../utils/toastAlerta'; // Importar a função toastAlerta
import Product from "../../Models/Product";
import CardProduct from "../../Components/Products/CardProducts/CardProducts";

function CategoryDescription() {
    const { id } = useParams<{ id: string }>();
    const [category, setCategory] = useState<Category | null>(null); // Ajuste da tipagem aqui
    const { user } = useContext(AuthContext);
    const token = user.token;
    let navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);

    async function findCategory() {
        try {
            await find(`/categories/${id}`, setCategory, {
                headers: { Authorization: token },
            });
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
        if (token === '') {
            toastAlerta('É necessário estar logado para acessar essa página', 'info');
            navigate('/login');
        } else {
            findCategory();
            findProducts();
        }
    }, [token, id]);

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
                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <h1 className="text-4xl font-bold m-10">{category.name}</h1>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-center mt-2 mb-8 mr-12 ml-12 text-xl">{category.description}</p>
                        </div>

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
        </div>
    );
}

export default CategoryDescription;
