import React from 'react';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unscribeFromAuth = null;

  componentDidMount() {
    this.unscribeFromAuth = auth.onAuthStateChanged(async userAuth  => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        console.log(userRef);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      } else {
        this.setState({currentUser: userAuth});
      }


    });
  }

  componentWillUnmount() {
    this.unscribeFromAuth();
  }


  render() {
    return (
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/shop" component={ ShopPage } />
            <Route exact path="/signin" component={ SignInAndSignUpPage } />
          </Switch>
        </div>
      );
  }
}

export default App;
