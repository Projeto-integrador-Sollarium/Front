import Category from './Category';

export default interface Product {
    id: number;
    name: string;
    inventory: number;
    price: number;
    description: string;
    category: Category | null;
}
