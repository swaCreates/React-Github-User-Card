import React, {Component} from 'react';
import FollowerCard from './FollowerCard';
import axios from 'axios';

class Follower extends Component {
    constructor(){
        super();
        this.state= {
            follower: [],
        }
    }

    componentDidMount(){
    axios
      .get(`https://api.github.com/users/swaCreates/followers`)
      .then(res => {
        console.log(res, 'this is follower data')
        this.setState({ follower: res.data })
      })
      .catch(err=> console.log(`This is my error: `, err));
      console.log(`component updated follower`);
  }

    render(){
        
        return (
            <div className="follower">
              <FollowerCard followers={this.state.follower} />
            </div>
          );

    }
}

export default Follower;

