import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';


const App = () => {
    return (
        <div className="App">
            <HelloWorld name='Nathan' />
            <HelloWorld name='Idan' />
        </div>
    );
};

export default App;