import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = { monsters: [1, 2], searchfield: 'a' };
    console.log("before ", this.state);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState({ monsters: users }))
      .then((users) => {
        console.log(users); // logs fetched data 
        this.setState({ monsters: users }); // updates state properly
      });
  }

  render() {
    const filtername = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchfield);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search-monsters' onChange={(event1) => {
          console.log({ startingarray: this.state.monsters });

          console.log(event1.target.value);

          const searchfield = event1.target.value.toLocaleLowerCase();

          this.setState(() => {
            return { searchfield };
          },
            () => {
              console.log({ endingarray: this.state.monsters });
            }
          );
        }} />

        {filtername.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}

      </div>
    );
  }

}

export default App;