// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const modeChangeCont = isDarkMode ? 'dark-container' : 'light-container'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const titleStyle = isDarkMode ? 'dark-title' : 'light-title'

    return (
      <div className="card-container">
        <div className={`container ${modeChangeCont}`}>
          <h1 className={`styling ${titleStyle}`}>Click To Change Mode</h1>
          <div>
            <button
              type="button"
              className="button button-2"
              onClick={this.onClickButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
