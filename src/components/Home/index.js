import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import './index.css';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div className="home">
        <h3>Welcome to your login home page </h3>
        <ol>{ !!users && <UserList users={users} /> }</ol>
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
      {Object.keys(users).map(key =>
        <div key={key}>{users[key].username}</div>
      )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);