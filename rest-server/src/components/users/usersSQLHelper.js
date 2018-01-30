// SQL helpers that return postgres syntax for queries
export const getUserHelper = (userId) => {
  // syntax for query
  return `
    SELECT * FROM Users 
    WHERE userId = ${userId} 
  `;
}