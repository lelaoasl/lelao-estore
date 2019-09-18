import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signinandsignup/signinandsignout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({ 
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        
      }
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {

    this.unsubscribeFromAuth();
  }
  

  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );



  }
  
}

export default App;
