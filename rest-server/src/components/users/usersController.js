import {
  getUserQuery
} from './usersQuery';

export const getUserController = async (req, res) => {
  try {
    const data = await getUserQuery(req.body);
    console.log('getUserController - successfully fetched user data', data)
    return res.status(200).send(data);
  } catch (err) {
    throw new Error(err);
  }
}