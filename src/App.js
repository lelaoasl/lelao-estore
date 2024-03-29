import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

import HomePage from './components/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signinandsignup/signinandsignout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {

    this.unsubscribeFromAuth();
  }
  

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to ='/' />) : (<SignInAndSignUp />)} />
        </Switch>
      </div>
    );



  }
  
}

const mapStateToProps = user => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
