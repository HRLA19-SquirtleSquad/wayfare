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
    SELECT * FROM skills WHERE listingId = ${listingId}
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

export const deleteListingSkillHelper = ( skillId ) => {
  return `
    DELETE FROM skills where id = ${Number(skillId.skillId)}
  `
}

export const acceptListingHelper = ( { listingId, guestId }) => {
  return `
    UPDATE listings SET guestId = ${guestId}, status = 'progress' where id = ${listingId}
  `
}

export const rejectListingHelper = ( { guestId, listingId }) => {
  return `
    DELETE FROM requests WHERE guestId = ${guestId} and listingId = ${listingId}
  `
}

export const getRequestsByGuestHelper = ({ guestId }) => {
  return ` 
    SELECT * FROM requests JOIN listings ON requests.listingId = listings.id WHERE requests.guestId = ${guestId}
  `
}

export const getRequestsByListingHelper = ( {listingId} ) => {
  return `
    SELECT * FROM requests JOIN users on requests.guestId = users.id WHERE requests.listingId = ${listingId}
  `
}