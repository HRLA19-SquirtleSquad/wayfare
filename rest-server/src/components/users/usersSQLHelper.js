export const getUserHelper = (uid) => {
  return `
    SELECT * FROM users 
    WHERE uid = '${uid}' 
  `
}

export const postUserHelper = (name, email, uid) => {
  return `
    insert into users values (
      default, 
      '${name}', 
      '${email}', 
      '${uid}', 
      null, 
      0, 
      0, 
      0, 
      0, 
      0
    )
  `
}

export const putUserHelper = (city, bio, image, uid) => {
  return `
    UPDATE users
    SET city = '${city}', bio = '${bio}', image = '${image}'
    WHERE uid = '${uid}'
  `
}

export const getUserNameHelper = (userId) => {
  return `
  SELECT name FROM users WHERE id = ${userId}
  `
}

export const getUserReviewsHelper = (userId) => {
  return `
    SELECT * FROM reviews WHERE commentor = ${userId} OR commentee = ${userId}
  `
}

// export const getGivenReviewsHelper = (userId) => {
//   return `
//     SELECT * FROM reviews WHERE commentor = ${userId} OR commentee = ${userId}
//   `
// }

// export const getReceivedReviewsHelper = (userId) => {
//   return `
//     SELECT * FROM reviews WHERE commentor = ${userId} OR commentee = ${userId}
//   `
// }

export const upgradeUserHelper = (uid, type) => {
  type === 0 ? type = 1 : type = 0;
  return `
    UPDATE users
    SET type = '${type}'
    WHERE uid = '${uid}'
  `
}

export const getUserDataHelper = ( userId ) => {
  return `
    SELECT * FROM users WHERE id = ${userId}
    `
}

export const getUserReviewsByListingHelper = ({listingId, userId}) => {
  return `
    SELECT * FROM reviews WHERE listingId = ${listingId} and commentor = ${userId}
    `
}

export const postReviewHelper = ({rating, review, commentor, commentee, listingId, type}) => {
  return ` INSERT INTO reviews VALUES (
      DEFAULT,
      null,
      ${rating}, 
      '${review}', 
      ${commentor}, 
      ${commentee}, 
      ${listingId}, 
      '${type}'
    )
  `
}