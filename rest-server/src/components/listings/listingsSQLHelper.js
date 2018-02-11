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

export const createListingHelper = ( title, startDate, endDate, latitude, longitude, address, city, state, country, hostId, description ) => {
  return `
    INSERT INTO listings VALUES (DEFAULT, '${title}', '${startDate}', '${endDate}', ${latitude}, ${longitude}, '${address}', '${city}', '${state}', '${country}', ${hostId}, null, 0, '${description}', 'pending') RETURNING id
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

export const getListingsByStatusHelper = ( status ) => {
  return `
    SELECT * FROM listings WHERE status = '${status}'
  `
}

export const addSkillToListingHelper = ( { listingId, skill}) => {
  return `
    INSERT INTO skills VALUES (DEFAULT, null, ${listingId}, '${skill}') RETURNING id
  `
}
export const createUserSkillsHelper = (userId, skill) => {
  return `
    INSERT INTO skills values (DEFAULT, ${userId}, null, '${skill}') 
  `
}

export const getUserSkillsHelper = ( userId ) => {
  return `
    SELECT * FROM skills where userId = ${userId} 
  `
}

export const deleteUserSkillsHelper = ( id ) => {
  return `
    DELETE FROM skills where id = ${id}
  `
}

export const createRequestHelper = ( guestId, listingId ) => {
  return `
    INSERT INTO requests VALUES (DEFAULT, ${guestId}, ${listingId}) RETURNING id
  `
}

export const createRequestSkillsHelper = (skillId, requestId) => {
  return `
    INSERT INTO requestskills VALUES (DEFAULT, ${skillId}, ${requestId})
  `
}


export const updateListingHelper = ( { title, startDate, endDate, latitude, longitude, address, city, state, country, description, listingId}) => {
  return `
    UPDATE listings SET
      title = '${title}', 
      startDate = '${startDate}', 
      endDate = '${endDate}', 
      latitude = ${latitude}, 
      longitude = ${longitude}, 
      address = '${address}', 
      city = '${city}', 
      state = '${state}', 
      country = '${country}', 
      description = '${description}'
    WHERE id = ${listingId}
  `
}
