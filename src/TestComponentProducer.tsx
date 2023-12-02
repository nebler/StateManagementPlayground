import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { ProductSubject } from './store/observer';

const TestComponentProducer = () => {
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const produce = (event) => {
        event.preventDefault();
        ProductSubject.data.push({
            name: name,
            price: price,
        });
        ProductSubject.notify();
    };
    return (
        <form onSubmit={produce}>
            <label>name:</label>
            <input
                name='name'
                onChange={(event) => setName(event.target.value)}
            />
            <label>price:</label>
            <input
                name='price'
                onChange={(event) => setPrice(Number(event.target.value))}
            />
            <button type='submit' onClick={produce}>
                Add Product
            </button>
        </form>
    );
};

export default TestComponentProducer;
