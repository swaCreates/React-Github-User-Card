import React, {Component} from 'react';
import './App.scss';
import axios from 'axios';
import UserCard from './components/UserCard';
import Follower from './components/Follower';

class App extends Component {

  constructor(){
    console.log(`constructor is mounted`);
    super();
    this.state= {
      gitHubUser: [],
    };
  }

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/swaCreates`)
      .then(res => {
        console.log(res.data)
        this.setState({ gitHubUser: [res.data] })
      })
      .catch(err=> console.log(`This is my error: `, err));
      console.log(`component mounted user`);
  }



  render(){
    console.log('render is mounted');
    return (
      <div className="App">
        <h1>GitHub User HUB</h1>
        <UserCard user={this.state.gitHubUser} />
        <Follower />
      </div>
    );

  }
  
}

export default App;
