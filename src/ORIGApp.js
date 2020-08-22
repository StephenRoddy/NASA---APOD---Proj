import React, { Component } from 'react';
import Objects from './components/objects.js';

class App extends Component {
  state = {
    objects:[]
  }

// I'm not sure that arrow functions are actually clearer...

  componentDidMount(){
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=UrXJyJZWfOwzULw07rfPFuiur4cEsYCmC7WaSkTZ')
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
