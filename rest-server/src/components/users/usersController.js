import {
  getUserQuery
} from './usersQuery';

export const getUserController = async (req, res) => {
  try {
    console.log('ID', req.query.userId) // params for GET requests
    const data = await getUserQuery(req.query.userId); 
    console.log('getUserController - successfully fetched user data', data)
    return res.status(200).send(data);
  } catch (err) {
    throw new Error(err);
  }
}