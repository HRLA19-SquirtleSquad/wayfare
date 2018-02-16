import {
  getUserQuery,
  postUserQuery,
  editUserQuery,
  getUserNameQuery, 
  getUserReviewsQuery,
  getGivenReviewsQuery,
  getReceivedReviewsQuery,
  upgradeUserQuery,
  getUserDataQuery, 
  getUserReviewsByListingQuery, 
  postReviewQuery, 
  updateGuestRatingQuery, 
  updateHostRatingQuery
} from './usersQuery';

export const getUserController = async (req, res) => {
  try {
    const data = await getUserQuery(req.query.uid); 
    return res.status(200).send(data);
  } catch (err) {
    throw new Error(err);
  }
}

export const postUserController = async (req, res) => {
  try {
    const data = await postUserQuery(req.body);
    return res.status(201).send(data);
  } catch (err) {
    throw new Error(err);
  }
}

export const updateUserController = async (req, res) => {
  try {
    const data = await editUserQuery(req.body);
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
    // let reviews = data.rows; 
    for (let i = 0; i <data.rows.length; i ++) {
      // let user = await getUserNameQuery(reviews[i].commentor); 
      // data.rows[i].commentor = user.rows[0].name;
      
      let commentor = await getUserNameQuery(data.rows[i].commentor);
      let commentee = await getUserNameQuery(data.rows[i].commentee);
      data.rows[i].commentor = commentor.rows[0].name;
      data.rows[i].commentee = commentee.rows[0].name
    }
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error(err); 
  }
}

// export const getGivenReviewsController = async (req, res) => {
//   try {
//     const reviews = await getGivenReviewsQuery(req.query.userId);
//     for (let i = 0; i < reviews.rows.length; i++) {
//       let commentor = await getUserNameQuery(reviews.rows[i].commentor);
//       let commentee = await getUserNameQuery(reviews.rows[i].commentee);
//       reviews.rows[i].commentor = commentor.rows[0].name;
//       reviews.rows[i].commentee = commentee.rows[0].name
//     }
//     return res.status(200).send(reviews.rows); 
//   } catch (err) {
//     throw new Error(err);
//   }
// }

// export const getReceivedReviewsController = async (req, res) => {
//   try {
//     const reviews = await getReceivedReviewsQuery(req.query.userId);
//     for (let i = 0; i < reviews.rows.length; i++) {
//       let commentor = await getUserNameQuery(reviews.rows[i].commentor);
//       let commentee = await getUserNameQuery(reviews.rows[i].commentee);
//       reviews.rows[i].commentor = commentor.rows[0].name;
//       reviews.rows[i].commentee = commentee.rows[0].name
//     }
//     return res.status(200).send(reviews.rows); 
//   } catch (err) {
//     throw new Error(err);
//   }
// }

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

export const getUserReviewsByListing = async (req, res) => {
  try {
    const data = await getUserReviewsByListingQuery(req.query); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error(err); 
  }
}

export const postReview = async (req, res) => {
  try {
    const data = await postReviewQuery(req.body.reviewDetails); 
    return res.status(200).send(data); 
  } catch (err) {
    throw new Error(err); 
  }
}

export const updateHostRating = async (req, res) => {
  try {
    const data = await updateHostRatingQuery(req.body);
    return res.status(200).send(data);
  } catch (err) {
    throw new Error(err); 
  }
}

export const updateGuestRating = async (req, res) => {
  try {
    const data = await updateGuestRatingQuery(req.body);
    return res.status(200).send(data);
  } catch (err) {
    throw new Error(err); 
  }
}
