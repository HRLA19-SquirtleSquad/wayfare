export const getUserHelper = (uid) => {
  return `
    SELECT * FROM users 
    WHERE uid = '${uid}' 
  `;
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
    SELECT * FROM reviews WHERE commentee = ${userId}
  `
}