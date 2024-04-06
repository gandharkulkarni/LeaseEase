import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Home from './components/home'
import authHandler from './auth/authHandler';
export default function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route index path="" element={<Login auth={authHandler}/>} />
            <Route index path="login" element={<Login auth={authHandler}/>} />
            <Route path="register" element={<Register auth={authHandler}/>} />
            <Route path="home" element={<Home auth={authHandler}/>} />
        </Routes>
      </BrowserRouter>
    );
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
