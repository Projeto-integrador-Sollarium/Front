import { createContext, ReactNode, useState } from "react"

import UserLogin from "../Models/UserLogin"
import { login } from "../Services/Service"
import Product from "../Models/Product"
import { toastAlerta } from "../utils/toastAlerta"

interface AuthContextProps {
    user: UserLogin
    handleLogout(): void
    handleLogin(user: UserLogin): Promise<void>
    isLoading: boolean
    addProduct: (product: Product) => void
    removeProduct: (productId: number) => void
    cleanCart: () => void
    items: Product[]
    itemsQuantity: number
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserLogin>({
        id: 0,
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        photo: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UserLogin) {
        setIsLoading(true)
        try {
            await login(`/users/login`, userLogin, setUser)
            toastAlerta("Usuário logado com sucesso", 'sucesso')
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta("Dados do usuário inconsistentes", 'erro')
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUser({
            id: 0,
            name: "",
            email: "",
            password: "",
            address: "",
            phone: "",
            photo: "",
            token: ""
        })
    }

    const [items, setItems] = useState<Product[]>([])

    const itemsQuantity = items.length

    function addProduct(product: Product) {
        if(user.id === undefined){
            handleLogout
        }else{
            setItems(state => [...state, product])
        }
        
    }

    
    function removeProduct(productId: number) {
        if(user.id === 0){
            handleLogout()
        }else{
        const indice = items.findIndex(items => items.id === productId) 
        let newCart = [...items]   

        
        if(indice >= 0){
            newCart.splice(indice, 1)
            setItems(newCart)  
        }
    }
    }

    function cleanCart() {
        toastAlerta("Compra Efetuada com Sucesso", "sucesso")
        setItems([])
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, isLoading, addProduct, removeProduct, cleanCart, items, itemsQuantity }}>
            {children}
        </AuthContext.Provider>
    )
}