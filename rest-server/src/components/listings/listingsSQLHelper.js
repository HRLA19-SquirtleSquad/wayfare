// RETURN string of psql syntax
export const getTopListingsHelper = () => {
  return `
    SELECT * FROM listings 
    ORDER BY viewCount; 
  `;
}

export const getListingImagesHelper = ( listingId ) => {
  return `
    SELECT url from images where id = ${listingId}
  `
}

export const getListingHelper = ( listingId ) => {
  return `
    SELECT * FROM LISTINGS WHERE id = ${listingId}
  `
}


export const updateListingViewCountHelper = ( listingId )  => {
  return `
    UPDATE listings SET viewCount = viewCount + 1 WHERE id = ${listingId}
  `
}

export const getListingSkillsHelper = ( listingId ) => {
  return `
    SELECT skill FROM skills WHERE id = ${listingId}
  `
}