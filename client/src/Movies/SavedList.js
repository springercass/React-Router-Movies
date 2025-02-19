import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="saved-movie"
          >
            {movie.title}
          </Link>
        ))}
        <Link to="/" className="homeLink">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
