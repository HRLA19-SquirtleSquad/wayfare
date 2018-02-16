import {
  signUpQuery,
  loginQuery
} from './authQuery';

export const signUpController = async (req, res) => {
  try {
    let email = req.body.email;
    let uid = req.body.uid;
    let image = req.body.image || null;
    let name = req.body.name || null;
    let message;
    const data = await signUpQuery(email, uid, image, name);
    if (data.rowCount === 0) {
      message = 'User already exists in sql db.';
      } else {
        message = 'User created successfully!';
      }
    res.status(200).send(data);
  } catch (err) {
    console.log('[authController.js] - Error using signUpQuery:', err);
    res.status(409).send({errMsg: err.message});
  }
}

export const loginController = async (req, res) => {
  try {
    let email = req.body.email;
    let uid = req.body.uid;
    const data = await loginQuery(email, uid)
    res.status(200).send(data)
  } catch (err) {
    console.log('[authController.js] - Error logging in: ', err)
    res.status(409).send({errMsg: err.message})
  }
}