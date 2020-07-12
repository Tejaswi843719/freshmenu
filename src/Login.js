import React, { Component } from "react"
import firebase from "firebase"
import './Home.css';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyBUJKWdJSl0tVUaXIRRC9S8L3walN0ELXc",
  authDomain: "freshmenu-cfc5d.firebaseapp.com"
})
class Login extends Component {
   state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
     
      <div className="App jumbotron pb-5 mb-5 bg-success" id="bg" style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        {this.state.isSignedIn ? (
          <span>
            <div className="text-primary "><b><h4>You are successfully Loged In!</h4></b></div><br/>
            <h2>Welcome {firebase.auth().currentUser.displayName}</h2><br/>
            <img className="rounded-circle"
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
             <br/><br/>
            <button className="btn btn-danger" onClick={() => firebase.auth().signOut()}>Log out!</button>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    
    )
  }
}

export default Login