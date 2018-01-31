export const signUpHelper = (email, uid) => {
  return `
    INSERT INTO users (email, uid)
    VALUES ('${email}', '${username}')
    RETURNING id, email, uid
  `;
}

export const loginHelper = (email, uid) => {
  return `
    SELECT email
    FROM users
    WHERE email='${email}'
  `;
};
