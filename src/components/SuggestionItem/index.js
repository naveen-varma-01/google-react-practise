// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details} = props
  const {suggestion} = details
  return (
    <li>
      <div>
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="icon"
        />
      </div>
    </li>
  )
}
export default SuggestionItem
