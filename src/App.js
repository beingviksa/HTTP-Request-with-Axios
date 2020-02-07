import React, { Component } from 'react';
import UserForm from './components/UserForm';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    repos: null
  };
  getData = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`).then(res => {
        const repos = res.data.public_repos;
        this.setState({ repos });
      });
    } else {
      return;
    }
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h3>HTTP Request with Axios</h3>
        </header>
        <UserForm getData={this.getData} />
        {this.state.repos ? (
          <p>Number of Public Repos: {this.state.repos}</p>
        ) : (
          <p>Please Enter the User Name</p>
        )}
      </div>
    );
  }
}

export default App;
