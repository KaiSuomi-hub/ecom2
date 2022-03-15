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

import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();
    this.state = {	//this is for Oauth
      currentUser: null,
    }
  }

  //*this is a lifecycle catch to keep an eye on the state of the login/oauth
  //*we call auth from firebase onchange and set state of currentUser to user which we get from google
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
    })
  }

  //* this is to stop memory leaks. We close the connection when component is not mounted
  unSubscribeFromAuth = null;
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
          {/* Here we pass along the login status state as a prop */}
        <Header currentUser={this.state.currentUser} />
        {/* //! this is how we dig stuff out from the oauth object */}

            <Routes>
            <Route path="/" element={<HomePage/>} ></Route>
            <Route path="/shop" element={<ShopPage />} ></Route>
            <Route path="/signin" element={<SignIn/>} ></Route>

          <Route
            //* 404
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>

              </main>
              }
              />
        </Routes>
        </div>
      );}
}

export default App;
