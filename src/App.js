import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

    return (
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path="shop/*" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
        
    );
  
}

export default App;
