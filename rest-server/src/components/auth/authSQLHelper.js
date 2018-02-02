export const signUpHelper = (email, uid, image, name) => {
  return `
    INSERT INTO users (email, uid, image, name)
    VALUES ('${email}', '${uid}', '${image}', '${name}')
    ON CONFLICT DO NOTHING
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
