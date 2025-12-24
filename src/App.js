import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cardlist from './components/card-list/Cardlist.js';


class App extends Component {
  constructor() {
    // console.log('1');

    super();

    this.state = {
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
    //console.log('3');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        }
      )
      );
  }

  render() {
    // console.log('2');
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

          {/* <Cardlist monster = {'hi this is also a card'} anything = {['a','1',   2]} /> */}

          <Cardlist monsters={filteredMonsters} />



          <button onClick={() => {

            console.log(this.state.name);
            this.setState(

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
