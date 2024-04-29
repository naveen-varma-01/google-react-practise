// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.event
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.includes(searchInput),
    )
    return (
      <div className="cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="search-cont">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul>
            {searchResults.map(eachItem => (
              <SuggestionItem key={eachItem.id} details={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
