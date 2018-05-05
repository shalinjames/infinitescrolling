import React, { Component, PropTypes } from 'react'
import ReactDOM, { render } from 'react-dom'
import Spinner from '../components/Spinner'

export default class SearchResults extends Component {
  constructor(props) {
 super(props)
 this.state = { results: [{items:[]}], isLoading: true,
      isLoadingMore: false }
      this.getContentJson = this.getContentJson.bind(this)
}
componentDidMount(){
  this.isVisible = true
}
componentWillUnmount(){
  this.isVisible = false
}    

componentWillReceiveProps(nextProps){
    if(this.props.searchText.trim() == nextProps.searchText.trim()){
    return false;
    }
    if(nextProps.searchText.trim() != ""){
        this.getContentJson(nextProps.searchText.trim(), false, true);
     }else{
      this.setState({ results: [{items:[]}] });
     }
     
     
}
getContentJson(searchText, nextPageToken, isNewSearchText) {
  let sourceUrl = "https://www.googleapis.com/plus/v1/activities?query="+searchText+"&key=AIzaSyCplrSwRxo22KwGozvQNg2MwcGbF6eIg4g&maxResults=20" 
  sourceUrl += (nextPageToken)? "&pageToken="+nextPageToken : ""
$.getJSON(sourceUrl, (res) => {
            let result = (isNewSearchText)? [{items:[]}].concat(res) : this.state.results.concat(res)
            this.setState({results : result, nextPageToken: res.nextPageToken, searchText:this.state.searchText })  
            this.setState({ isLoadingMore: false });
        });
this.loadMore();
  }

loadMore() {
    $(window).unbind('scroll');

    $(window).bind('scroll', function () {

      if ($(window).scrollTop() == $(document).height() - $(window).height() && this.isVisible) {
          this.setState({isLoadingMore : true}); //To show loader at the bottom
          this.getContentJson(this.state.searchText, this.state.nextPageToken, false);
      }
    }.bind(this));
  }
  render() {
    return (
        <div className="content-container">
        {this.state.results.map( page => 
          page.items.map(item => 
            <div className="content media">
              <div className="media-left">
                  <a href={item.actor.url}>
                    <img src={item.actor.image.url}  className="media-object" /> 
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading"><a href={item.actor.url}>{item.actor.displayName}</a> 
                  </h4>
                  <button onClick={() => this.props.onProfileAdd(item.actor)} className="btn btn-default"> Add Profile </button>
              <div dangerouslySetInnerHTML={{__html:item.object.content}} />
            </div>
            </div>
        )
        )}
        <div className={ this.state.isLoadingMore ? 'mtop50' : 'hide'}>
              <Spinner />
            </div>         
      </div>
    )
  }
}