import React, { Component } from "react";
import Board from "../Board";
import CommentService from "./game.service";

class Game extends Component {
  render() {
    const component = (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );

    return component;
  }
}

export default Game;
