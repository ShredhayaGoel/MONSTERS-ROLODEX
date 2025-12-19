import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstname: 'Shubh', lastname: 'Goel' },
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hi {this.state.name.firstname} {this.state.name.lastname}</p>
          <button onClick={() => {

            //   this.state.name = ' SHUBH GOEL'   // this.setState(this.state);
            /*  this.setState({
                name: { firstname: 'Shredhaya', lastname: 'Goel' },
              });*/

            console.log(this.state.name);
            this.setState(
              () => {
                return {
                  name: { firstname: 'Shredhaya', lastname: 'Goel' },
                };
              },
              () => {
                console.log(this.state);
              }
            );

          }}
          >Change Name</button>
        </header>-
      </div>
    );
  }
}

export default App;
