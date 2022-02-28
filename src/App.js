import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homapage.component';
import {
  Route,
  Routes,
  // useParams,
} from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignIn from './pages/sign-in/sign-in.component'



function  App() {
    return (
      <div>
        <Header/>
          <Routes>
          <Route path="/" element={<HomePage/>} ></Route>
          <Route path="/shop" element={<ShopPage />} ></Route>
          <Route path="/signin" element={<SignIn/>} ></Route>

          <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
            />
          </Routes>
      </div>
    );
}

export default App;
