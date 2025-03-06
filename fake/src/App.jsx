//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

//function App() {
  //const [count, setCount] = useState(0)

 // return (
    //<>
      //<div>
       // <a href="https://vite.dev" target="_blank">
          //<img src={viteLogo} className="logo" alt="Vite logo" />
        //</a>
       // <a href="https://react.dev" target="_blank">
         // <img src={reactLogo} className="logo react" alt="React logo" />
       // </a>
     // </div>
     // <h1>Vite + React</h1>
     // <div className="card">
       // <button onClick={() => setCount((count) => count + 1)}>
         // count is {count}
       // </button>
       // <p>
         // Edit <code>src/App.jsx</code> and save to test HMR
        //</p>
      //</div>
     // <p className="read-the-docs">
     //   Click on the Vite and React logos to learn more
     // </p>
   // </>
  //)
//}

//export default App



import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Beard oils', price: 20.00 , description: 'all natural' },
    { id: 2, name: 'steel sword', price: 400, description: 'this is a starting point for price fully customizable' },
    { id: 3, name: 'hand forge items', price: 50.00, description: 'prize is per hour plus consumables' }
  ]);

  return (
    <div className="app">
      <h1>Dwarven Iron And Apothecary</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
