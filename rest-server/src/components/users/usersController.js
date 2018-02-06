import {
  getUserQuery,
  postUserQuery,
  editUserQuery,
  getUserNameQuery, 
  getUserReviewsQuery
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

export const updateUserController = async (req, res) => {
  try {
    const data = await editUserQuery(req.body);
    // console.log('putUserController - successfully updated user data', data);
    return res.status(200).send(data);
  } catch (err) {
    throw new Error(err);
  }
}

export const getUserNameController = async (req, res) => {
  try {
    const data = await getUserNameQuery(req.query.userId); 
    return res.status(200).send(data.rows[0].name); 
  } catch (err) {
    throw new Error(err); 
  }
}

export const getUserReviewsController = async (req, res) => {
  try {
    const data = await getUserReviewsQuery(req.query.userId); 
    let reviews = data.rows; 
    for (let i = 0; i <reviews.length; i ++) {
      let user = await getUserNameQuery(reviews[i].commentor); 
      data.rows[i].commentor = user.rows[0].name; 
    }
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error(err); 
  }
}