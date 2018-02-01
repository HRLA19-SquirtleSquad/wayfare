import {
  signUpQuery,
  loginQuery
} from './authQuery';

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
    const authData = await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
    let email = authData.providerData[0].email;
    let uid = authData.providerData[0].uid;
    let name = req.body.name;
    let image = req.body.image;

    try {
      const data = await signUpQuery(name, email, uid, image)
      let id = data.rows[0].id;
      res.status(201).send({success: true, message:`User created successfully: ${email}`, id: id, uid: uid, email: email, name: name,})
    } catch (err) {
      console.log('[authController.js] - Error using signUpQuery:', err)
      res.status(409).send({errMsg: err.message})
    }
  } catch (err) {
    console.log('[authController.js] - Failed to sign up user into Firebase: ', err)
    res.status(409).send({errMsg: err.message})

  }
}

export const loginController = async (req, res) => {
  try {
    const authData = await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    let email = authData.providerData[0].email;
    let uid = authData.providerData[0].uid;

    try {
      const data = await loginQuery(email, uid)
      console.log('i am data from logging in:', data)
      let id = data.rows[0].id;
      res.status(201).send({success: true, message:`This user has signed in: ${email}`, id: id, email: email})
    } catch (err) {
      console.log('Error logging in.', err)
      res.status(409).send({errMsg: error.message})
    }
  } catch (err) {
    console.log('Error logging in user via firebase.')
    res.status(409).send({errMsg: err})
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