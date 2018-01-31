import {
  signUpQuery
} from './usersQuery';

import firebase from 'firebase';

let firebase_config = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  databaseURL: process.env.FB_DATABASEURL,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MESSAGINGSENDERID
}

firebase.initializeApp(firebase_config);

export const signUpController = async (req, res) => {
  try {

    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
      // user is added to firebase.

      .then((authData) => {
        let email = authData.providerData[0].email;
        let uid = authData.providerData[0].uid;

        // add user to sql db (find or create)
        // send that data back to client
        const data = await signUpQuery(email, uid)
        console.log('user created in postgresql', data)

        res.status(201).send({uid: uid, email: email, success: true, message:`User created successfully: ${email}`})
      }).catch((error) => {
        console.log('Error creating user.\nError Code: ", error.code, "\nError Message: ", error.message')
        res.status(409).send({errMsg: error.message})
      }) 
  } catch (err) {
    throw new Error(err);
  }
}

export const loginController = async (req, res) => {
  try {

    firebase.auth().signInWithEmailAndPassword(req.body.username, req.body.password)
    // user is signed in
    .then((authData) => {
      let uid = authData.providerData[0].uid;
      let email = authData.providerData[0].email;
      console.log(`User successfully signed in. UID: ${uid}, Email: ${email} `);

      // query user from sql db (find)
      // send that data back to client
      const data = await loginQuery(email, uid)
      console.log('user logged in. query from postgresql: ', data)


      res.status(201).send({uid: uid, email: email, success: true, message:`This user has signed up: ${email}`})
   
    }).catch((error) => {
      console.log('Error logging in.\nError Code: ", error.code, "\nError Message: ", error.message')
      res.status(409).send({errMsg: error.message})
    }) 

  } catch (err) {
    throw new Error(err);
  }
}

export const logoutController = async (req, res) => {
  try {
    firebase.auth().signOut().then(function() {
      console.log("Sign out successful.")
      res.status(200).send({success: true, message: `Sign out successful.`})
    }).catch(function(error) {
      console.log('Error logging out:', error)
      res.status(409).send({success: false, errMsg: `Error logging out.`})

    });
  } catch (err) {
    throw new Error(err);
  }
}