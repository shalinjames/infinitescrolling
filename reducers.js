import { combineReducers } from 'redux'

import {ADD_PROFILE, DELETE_PROFILE, SEARCH_PROFILES} from './actions.js'

const profiles = (state = [], action) => {
  switch (action.type){
    case ADD_PROFILE: 
    return[...state, {
          id: action.id,
          name: action.name,
          url: action.url,
          image: action.image
        }]
    case DELETE_PROFILE: 
    return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    default: 
    return state
  }
} 

function searchProfiles(state = '', action) {
  switch (action.type) {
    case SEARCH_PROFILES:
      return action.searchtext
    default:
      return state
  }
}

const profileApp = combineReducers({
  profiles,
  searchProfiles
})


export default profileApp
