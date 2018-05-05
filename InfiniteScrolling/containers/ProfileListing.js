import React, {Component} from 'react'
import { connect } from 'react-redux'
import {ADD_PROFILE, DELETE_PROFILE, addProfile, deleteProfile, setSearchProfileText} from '../actions'
import { Link } from 'react-router'
import Spinner from '../components/Spinner'

class ProfileListing extends Component{	
	render(){
		const { dispatch, profiles} = this.props
		return (
			 <div className="content-container">
              {profiles.map((profile, index) => 
                <div className="media content" key={profile.id}>
                  <div className="media-left">
                  <a href={profile.url}>
                    <img src={profile.image}  className="media-object" /> 
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading"><a href={profile.url}>{profile.name}</a></h4>
                  <button onClick={() => {
                    if(confirm("Are you sure want to delete this profile?")){
                        dispatch(deleteProfile(index))
                    }
                  }} className="btn btn-default">Delete</button>
            </div>
            </div>
              )}
       </div>   
		)}
}

function select(state) {
  return {
    profiles: state.profiles
  }
}
export default connect(select)(ProfileListing)