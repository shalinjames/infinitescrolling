import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {ADD_PROFILE, DELETE_PROFILE, addProfile, deleteProfile, setSearchProfileText} from '../actions'
import SearchComponent from '../components/SearchComponent'
import { Link } from 'react-router'

const checkduplicate = (actor,profiles) => {
    let duplicate = false
            profiles.map(profile => {
                if(profile.id == actor.id){
                  duplicate = true
                }
            })
            return duplicate
             
  }

class SearchContainer extends Component {
 constructor(props) {
        super(props)
      this.state = { searching: "" }
      this.onSearchOfProfile = this.onSearchOfProfile.bind(this)
  }

onSearchOfProfile(newText){
  this.setState({searching: newText})
}  
  render() {
    const { dispatch, profiles} = this.props
    return (
      <div className="row">
        <SearchComponent searchLabel={'G+ Activities Search'}
          onSearch={this.onSearchOfProfile} 
          searchText={this.state.searching}
          onProfileAdd={actor =>{
          if(!checkduplicate(actor, profiles)){
                  dispatch(addProfile(actor))
              }  

          }} />
         
      </div>
    )
  }
}

function select(state) {
  return {
    profiles: state.profiles
  }
}
export default connect(select)(SearchContainer)