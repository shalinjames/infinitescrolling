import React, { Component} from 'react'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'

export default class SearchComponent extends Component {
render() {
    return (
     	<div className="col-md-11">
     		<SearchBox searchLabel={this.props.searchLabel} onSearch={this.props.onSearch} />
     		<SearchResults searchText={this.props.searchText}  onProfileAdd={this.props.onProfileAdd}/> 
     	</div>
    )
  }
}