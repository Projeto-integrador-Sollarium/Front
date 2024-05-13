import Product from './Product';

export default interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    photo: string;
    product?: Product | null ;

}