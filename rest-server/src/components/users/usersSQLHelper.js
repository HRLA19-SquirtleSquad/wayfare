export const getUserHelper = (userId) => {
  return `
    SELECT * FROM users 
    WHERE id = ${userId} 
  `;
}