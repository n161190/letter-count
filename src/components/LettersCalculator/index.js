// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    word: '',
  }

  getword = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state
    return (
      <div className="con">
        <div className="con1">
          <div>
            <h1>Calculate the Letters you enter</h1>
            <label htmlFor="input">Enter the phrase</label>
            <input
              type="text"
              placeholder="Enter the phrase"
              id="input"
              onChange={this.getword}
            />
            <p>No.of letters: {word.length}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
