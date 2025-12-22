import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    console.log('1');

    super();
    this.state = {
      name: { firstname: 'Shubh', lastname: 'Goel' },
      monsters: [

      ]

    };
  }

  componentDidMount() {
    console.log('3');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state.monsters);
        }
      )
      );
  }

  render() {
    console.log('2');
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hi {this.state.name.firstname} {this.state.name.lastname}</p>
          {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })}

          <button onClick={() => {

            console.log(this.state.name);
            this.setState(
              () => {
                return {
                  name: { firstname: 'Shredhaya', lastname: 'Goel' },

                  monsters: [
                    { id: 1, name: 'monster A' },
                    { id: 2, name: 'monster B' },
                    { id: 3, name: 'monster C' },
                  ],
                };
              },
              () => {
                console.log(this.state.monsters);
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
