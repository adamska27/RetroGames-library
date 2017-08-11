import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Game from './Game';

export default class GamesListManager extends PureComponent {
  render() {
    const { games, searchBar, setSearchBar, toggleModal, deleteGame } = this.props;
    return(
      <div className="container scrollable">
        <div className="row text-letf">
          <Link to="/games/add" className="btn btn-danger">Add a new Game!</Link>
        </div>
        <div className="row">
          <input type="search" placeholder="Search by name" className="form-control search-bar" onKeyUp={setSearchBar} />
        </div>
        <div className="row">
          {
            games ? (
              games
              .filter(game => game.name.toLowerCase().includes(searchBar))
              .map( (game, index) => {
                return(
                  <Game {...game}
                    key={game.id}
                    i={index}
                    toggleModal={toggleModal}
                    deleteGame={deleteGame}
                  />
                );
              })
            ) : console.log("no games")
          }
        </div>
        <hr />
      </div>
    );
  }
}
