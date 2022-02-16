import React from 'react';
import './App.css';
import HomePage from './page/homepage/homapage.component';
import {
  Route,
  Routes,
  useParams,
} from 'react-router-dom';


const HatsPage = (props) => {
  console.log(props);
  return (

    <h1>Hats!</h1>

    )
};



function  App() {
    return (
      <div>
          <Routes>
          <Route path="/" element={<HomePage/>} ></Route>
          <Route path="/hats" element={<HatsPage />} ></Route>
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
