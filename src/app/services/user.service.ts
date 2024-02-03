import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Product } from "../models/product.model";

@Injectable()
export class UserService{

    users2: User[] = [
        {
            name: 'Ana',
            lastname: 'Regalado',
            email: 'ana@gmail.com',
            password: '1234'
        },
        {
            name: 'Ander',
            lastname: 'Gonzalez',
            email: '',
            password: ''
        },
        {
            name: 'Judit',
            lastname: 'Ibarguren',
            email: '',
            password: ''
        }
    ]

    productSelected: Product[] = [
        {
            name: 'CocaCola',
            price: 2,
            description: 'CocaCola 33cl',
            id: 1,
        },
        {
            name: 'Fanta',
            price: 2,
            description: 'Fanta 33cl',
            id: 2,
        },
        {
            name: 'Aquarius',
            price: 2,
            description: 'Aquarius 33cl',
            id: 3,
            
        }
    ]

    getAll() : User []{
        return this.users2;
    }

    getProductSelected() : Product[]{
        return this.productSelected;
    }

    add(user : User){
        
    }
}