import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: ''}

  changeInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {
    const {inputValue} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="para">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input-element"
            value={inputValue}
            onChange={this.changeInputValue}
            id="input"
          />
          <p className="button-container">No.of letters: {inputValue.length}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
