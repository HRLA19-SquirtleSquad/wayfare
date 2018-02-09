// RETURN string of psql syntax
export const getTopListingsHelper = () => {
  return `
    SELECT * FROM listings 
    ORDER BY viewCount; 
  `;
}

export const getListingImagesHelper = ( listingId ) => {
  return `
    SELECT url from images where listingid = ${listingId}
  `
}

export const getListingHelper = ( listingId ) => {
  return `
    SELECT * FROM LISTINGS WHERE id = ${listingId}
  `
}

export const updateListingViewCountHelper = ( listingId )  => {
  return `
    UPDATE listings SET viewCount = viewCount + 1 WHERE id = ${listingId} RETURNING viewCount
  `
}

export const getListingSkillsHelper = ( listingId ) => {
  return `
    SELECT skill FROM skills WHERE listingId = ${listingId}
  `
}

export const createListingHelper = ( title, startDate, endDate, latitude, longitude, address, city, hostId, description ) => {
  return `
    INSERT INTO listings VALUES (DEFAULT, '${title}', '${startDate}', '${endDate}', ${latitude}, ${longitude}, '${address}', '${city}', null, null, ${hostId}, null, 0, '${description}', 'PENDING') RETURNING id
  `
}

export const getSearchedListingsHelper = ( city ) => {
  return `
    SELECT * FROM LISTINGS
  `
  // Revise so users can search by city
};
export const postListingPhotoHelper = ( listingId, url ) => {
  return `
    INSERT INTO images (listingId, url)
    VALUES ('${listingId}', '${url}')
    ON CONFLICT DO NOTHING
    RETURNING id
  `
}


export const addSkillToListingHelper = ( { listingId, skill}) => {
  return `
    INSERT INTO skills VALUES (DEFAULT, null, ${listingId}, '${skill}') RETURNING id
  `
}
