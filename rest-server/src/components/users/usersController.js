import {
  getUserQuery,
  postUserQuery
} from './usersQuery';

export const getUserController = async (req, res) => {
  try {
    // console.log('ID', req.query.uid); // params for GET requests
    const data = await getUserQuery(req.query.uid); 
    // console.log('getUserController - successfully fetched user data', data);
    return res.status(200).send(data);
  } catch (err) {
    throw new Error(err);
  }
}

export const postUserController = async (req, res) => {
  try {
    const data = await postUserQuery(req.body);
    // console.log('postUserController - successfully posted user data', data);
    return res.status(201).send(data);
  } catch (err) {
    throw new Error(err);
  }
}