export const signUpHelper = (name, email, uid, image) => {
  return `
    INSERT INTO users (name, email, uid, image)
    VALUES ('${name}', '${email}', '${uid}', '${image}')
    RETURNING id, email, uid
  `;
}

export const loginHelper = (email, uid) => {
  return `
    SELECT email, id
    FROM users
    WHERE email='${email}'
  `;
};
