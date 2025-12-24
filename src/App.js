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

      ],
      SearchField: '',

    };
  }

  onsearchChange = (event) => {
    const SearchField = event.target.value.toLowerCase();

    console.log(SearchField); // it converts my input value to Lowercase (that what i types in the input searchbox)


    // console.log(filteredMonsters);

    this.setState(() => {
      return { SearchField }
    });

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
    const filteredMonsters = this.state.monsters.filter((monster) => {

      return monster.name.toLocaleLowerCase().includes(this.state.SearchField);
    }
    );

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <input className='search-box' type='search' placeholder='search monsters' onChange={this.onsearchChange}
          // console.log(event.target.value);

          />



          <p>Hi {this.state.name.firstname} {this.state.name.lastname}</p>
          {filteredMonsters.map((monster) => {
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
