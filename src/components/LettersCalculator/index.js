import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onTriggering = event => {
    const {value} = event.target
    this.setState({input: value})
  }

  render() {
    const {input} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="container1">
            <h1 className="heading">
              Calculate the <br /> Letters you <br />
              enter
            </h1>
            <label htmlFor="inputs" className="para">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              id="inputs"
              className="search-bar"
              onChange={this.onTriggering}
              value={input}
            />
            <p className="para1">No.of letters: {input.length}</p>
          </div>
          <div className="container2">
            <img
              src="
               https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
