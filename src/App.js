import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstname: 'Shubh', lastname: 'Goel' },
      monsters: [
        {
          id: 1,
          name: 'monster 1',
        },
        {
          id: 2,
          name: 'monster 2',
        },
        {
          id: 3,
          name: 'monster 3',
        },
      ]
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hi {this.state.name.firstname} {this.state.name.lastname}</p>
          {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })}

          <button onClick={() => {

            //   this.state.name = ' SHUBH GOEL'   // this.setState(this.state);
            /*  this.setState({
                name: { firstname: 'Shredhaya', lastname: 'Goel' },
              });*/

            console.log(this.state.name);
            this.setState(
              /*   () => {
                   return {
                     name: { firstname: 'Shredhaya', lastname: 'Goel' },
                   };
                 },*/
              () => {
                return {
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
