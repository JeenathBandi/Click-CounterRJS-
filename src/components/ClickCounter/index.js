// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="div-1">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="span-element">{count}</span> times
        </h1>
        <div className="div-2">
          <p className="description">Click the button to increase the count!</p>
          <button className="button" onClick={this.onIncrement}>
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
