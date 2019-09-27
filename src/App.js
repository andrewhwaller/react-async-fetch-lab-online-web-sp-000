// create your App component here
import React, {Component} from 'react';

class App extends Component {

  state = {
    appData: []
  }

  componentDidMount() {
    fetch('')
      .then(response => response.json())
      .then(data => {
        this.setState({
          appData: data
        })
      })
  }
  render() {

  }

}

export default App;
