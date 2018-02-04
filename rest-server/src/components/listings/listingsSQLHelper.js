// RETURN string of psql syntax
export const getTopListingsHelper = () => {
  return `
    SELECT * FROM listings 
    ORDER BY viewCount; 
  `;
}

export const getListingImagesHelper = (listingId) => {
  return `
    SELECT url from images where id = ${listingId}
  `
}