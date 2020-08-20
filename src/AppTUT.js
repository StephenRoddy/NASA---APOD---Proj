import React, { Component } from 'react';
import Objects from './components/objects.js';

class App extends Component {
  state = {
    objects:[]
  }

// There is a bit to unpakc in the user of arrow function expressions etc in the componentDidMount method

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ objects:data })
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
