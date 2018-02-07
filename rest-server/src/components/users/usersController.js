import {
  getUserQuery,
  postUserQuery,
  editUserQuery,
  getUserNameQuery, 
  getUserReviewsQuery,
  getGivenReviewsQuery,
  getReceivedReviewsQuery,
  upgradeUserQuery,
  getUserDataQuery
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

export const getGivenReviewsController = async (req, res) => {
  try {
    const data = await getUserQuery(req.query.userId);
    let id = data.rows[0].id;
    const reviews = await getGivenReviewsQuery(id);
    for (let i = 0; i < reviews.rows.length; i++) {
      let commentor = await getUserNameQuery(reviews.rows[i].commentor);
      let commentee = await getUserNameQuery(reviews.rows[i].commentee);
      reviews.rows[i].commentor = commentor.rows[0].name;
      reviews.rows[i].commentee = commentee.rows[0].name
    }
    return res.status(200).send(reviews.rows); 
  } catch (err) {
    throw new Error(err);
  }
}

export const getReceivedReviewsController = async (req, res) => {
  try {
    const data = await getUserQuery(req.query.userId);
    let id = data.rows[0].id;
    const reviews = await getReceivedReviewsQuery(id);
    for (let i = 0; i < reviews.rows.length; i++) {
      let commentor = await getUserNameQuery(reviews.rows[i].commentor);
      let commentee = await getUserNameQuery(reviews.rows[i].commentee);
      reviews.rows[i].commentor = commentor.rows[0].name;
      reviews.rows[i].commentee = commentee.rows[0].name
    }
    return res.status(200).send(reviews.rows); 
  } catch (err) {
    throw new Error(err);
  }
}

export const upgradeUserController = async (req, res) => {
  try {
    const data = await upgradeUserQuery(req.body);
    return res.status(200).send(data);
  } catch (err) {
    throw new Error(err); 
  }
}

export const getUserDataController = async (req, res) => {
  try {
    const data = await getUserDataQuery(req.query.userId); 
    return res.status(200).send(data.rows[0]); 
  } catch (err) {
    throw new Error(err); 
  }
}