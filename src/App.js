import React, { Component } from 'react';
import Objects from './components/objects.js';

class App extends Component {
  state = {
    objects:[]
  }

// There is a bit to unpac kin the user of arrow function expressions etc in the componentDidMount method

  componentDidMount(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=UrXJyJZWfOwzULw07rfPFuiur4cEsYCmC7WaSkTZ')
    .then(res => res.json())
    .then((data) => {
      this.setState({ objects: data })
    })
    .catch(console.log)
  }
  render () {
    return (
      <Objects objects={this.state.objects} />
    )
  }
}

export default App;
