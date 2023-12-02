import { useState } from 'react';
import './App.css';
import TestComponentProducer from './TestComponentProducer';
import TestComponentSubscriber from './TestComponentSubscriber';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
function App() {
    return (
        <>
            <TestComponentProducer></TestComponentProducer>
            <TestComponentSubscriber></TestComponentSubscriber>
        </>
    );
}

export default App;
