import React, { Component } from 'react'
import AddUser from './Components/AddUser';
import Users from './Components/Users';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: 'Tahir',
          email: 'tahir@gmail.com'
        },
        {
          id: 2,
          name: 'Ahir',
          email: 'ahir@gmail.com'
        },
        {
          id: 3,
          name: 'Hir',
          email: 'hir@gmail.com'
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    let updatedUsers = this.state.users;
    console.log(updatedUsers);
    updatedUsers = updatedUsers.filter(user => user.id !== id);
    this.setState({
      users: updatedUsers
    })
  }
 
  render() {
    return (
      <div className="container">
        <AddUser users={this.state.users} />
        <Users deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    )
  }
}
