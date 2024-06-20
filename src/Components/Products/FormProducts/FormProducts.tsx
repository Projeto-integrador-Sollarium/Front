import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext';
import Product from '../../../Models/Product';
import Category from '../../../Models/Category';
import { find, update, register } from '../../../Services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';

interface FormProductProps {
    closeModal: () => void;
    initialProduct?: Product; // Atualizado
}

function FormProduct({ closeModal, initialProduct }: FormProductProps) {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    const [categories, setCategories] = useState<Category[]>([]);

    const [category, setCategory] = useState<Category>(initialProduct?.category || {
        id: 0,
        name: '',
        description: '',
    });

    const [product, setProduct] = useState<Product>(initialProduct || {
        id: 0,
        name: '',
        inventory: 0,
        price: 0,
        description: '',
        photo: '',
        category: null
    });

    async function findProductByID(id: string) {
        await find(`/products/${id}`, setProduct, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function findCategoryByID(id: string) {
        await find(`/categories/${id}`, setCategory, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function searchCategories() {
        await find('/categories', setCategories, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token, navigate]);

    useEffect(() => {
        searchCategories();
        if (id !== undefined) {
            findProductByID(id);
        }
    }, [id]);

    useEffect(() => {
        setProduct({
            ...product,
            category: category,
        });
    }, [category]);

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
            category: category,
        });
    }

    function turnBack() {
        navigate('/products');
    }

    async function createNewProduct(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({ product });

        if (id != undefined) {
            try {
                await update(`/products`, product, setProduct, {
                    headers: {
                        Authorization: token,
                    },
                });
                toastAlerta('O produto foi atualizado com sucesso', 'sucesso');
                closeModal(); // Fechando o modal ao concluir a operação
                turnBack();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar o Produto', 'erro');
                }
            }
        } else {
            try {
                await register(`/products`, product, setProduct, {
                    headers: {
                        Authorization: token,
                    },
                });

                toastAlerta('Produto cadastrado com sucesso', 'sucesso');
                closeModal(); // Fechando o modal ao concluir a operação
                turnBack();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar o Produto', 'erro');
                }
            }
        }
    }

    const loadingCategory = category.description === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

            <form onSubmit={createNewProduct} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Nome do Produto</label>
                    <input
                        value={product.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        type="text"
                        placeholder="Nome"
                        name="name"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="description">Descrição:</label>
                    <input
                        value={product.description}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        type="text"
                        placeholder="Descrição"
                        name="description"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="inventory">Quantidade:</label>
                    <input
                        value={product.inventory}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        type="number"
                        placeholder="Quantidade"
                        name="inventory"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="price">Preço (R$):</label>
                    <input
                        value={product.price}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        type="number"
                        placeholder="R$"
                        name="price"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="photo">Foto:</label>
                    <input
                        value={product.photo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        type="text"
                        placeholder="Foto do Produto"
                        name="photo"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => findCategoryByID(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione uma Categoria:</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id} >{category.name}</option>
                        ))}
                    </select>
                </div>
                <button disabled={loadingCategory} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
                    {loadingCategory ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormProduct;
