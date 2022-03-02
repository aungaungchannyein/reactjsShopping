import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

    return (
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path="shop/*" element={<ShopPage />} />
         <Route path="signin/*" element={<SignInAndSignUpPage/>} />
        </Routes>
      </BrowserRouter>
        
    );
  
}

export default App;
