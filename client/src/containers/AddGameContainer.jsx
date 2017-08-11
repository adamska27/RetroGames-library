import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from '../components';

export default class AddGameContainer extends Component {
  constructor (props) {
    super(props);
    // Initial state
    this.state = {
      newGame: {},
      redirect: false
    };
    // Bind this (context) to the functions to be passed down to the children components
    this.submit = this.submit.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.setGame = this.setGame.bind(this);
  }
  submit () {
    // We create the newGame object to be posted to the server
    const newGame = Object.assign({}, this.state.newGame);
    console.log(newGame);
    fetch('http://localhost:8080/games', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newGame)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ redirect: true});
      if (this.state.redirect) {
        return <Redirect to="/games"/>
      }
      // We go back to the games list view
      // hashHistory.push('/games');
    });
  }
  uploadPicture () {
    filepicker.pick (
      {
        mimetype: 'image/*', // Cannot upload other files but images
        container: 'modal',
        services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
        openTo: 'COMPUTER' // First choice to upload files from
      },
      function (Blob) {
        console.log(JSON.stringify(Blob));
        $('#picture').attr('src', Blob.url);
      },
      function (FPError) {
        console.log(FPError.toString());
      }
    );
  }
  // We make sure to keep the state up-to-date to the latest input values
  setGame () {
    const newGame = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      year: document.getElementById('year').value,
      picture: $('#picture').attr('src')
    };
    this.setState({ newGame });
  }
  render () {
    console.log(this.state.newGame);
    return <Form submit={this.submit} uploadPicture={this.uploadPicture} setGame={this.setGame} />
  }
}
