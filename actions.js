export const ADD_PROFILE = 'ADD_PROFILE'
export const DELETE_PROFILE = 'DELETE_PROFILE'
export const SEARCH_PROFILES = 'SEARCH_PROFILES'

export function addProfile(actor) {
  return {
    id: actor.id,
    type: ADD_PROFILE,
    url: actor.url,
    image: actor.image.url,
    name: actor.displayName
  }
}

export function deleteProfile(index) {
  return { type: DELETE_PROFILE, index }
}

export function setSearchProfileText(searchtext) {
  return { type: SEARCH_PROFILES, searchtext }
}
