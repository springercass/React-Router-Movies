import React, { Component } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (!savedList.map(savedMovie => savedMovie.id).includes(movie.id)) {
      savedList.push(movie);
    }
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div className="appBody">
          <Route exact path="/" component={MovieList} />
          <Route
            path="/movies/:id"
            render={props => (
              <Movie {...props} addToSavedList={this.addToSavedList} />
            )}
          />
        </div>
      </div>
    );
  }
}
