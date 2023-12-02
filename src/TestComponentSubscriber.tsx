import React, { useState } from 'react';
import { Observer, Product, ProductSubject, Subject } from './store/observer';

const TestComponentSubscriber = () => {
    const [products, setProducts] = useState(new Array<Product>());

    const ProductObserver: Observer<Product> = {
        update: function (subject: Subject<Product>): Product[] {
            const cheapStuff = new Array<Product>();
            subject.data.forEach((product) => {
                console.log(product);
                cheapStuff.push(product);
            });
            setProducts(cheapStuff);
            return cheapStuff;
        },
        state: [],
    };
    ProductSubject.attach(ProductObserver);
    console.log(products);
    return (
        <div>
            {products.map((product) => {
                return (
                    <div key={product.name}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default TestComponentSubscriber;
