// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.round(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          {count % 2 === 0 && <p>Count is Even</p>}
          {count % 2 !== 0 && <p>Count is Odd</p>}
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
