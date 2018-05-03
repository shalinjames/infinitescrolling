import React from "react";
import Square from "../Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isXNext: true
    };
  }
  handleClick(i) {
    const { squares, isXNext } = this.state;
    squares[i] = isXNext ? "X" : "O";
    this.setState({ squares, isXNext: !isXNext });
  }
  renderSquare(i) {
    const comp = this;
    return (
      <Square
        value={comp.state.squares[i]}
        onClick={() => comp.handleClick(i)}
      />
    );
  }

  render() {
    const status = "Next player: X";
    const component = this;
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {component.renderSquare(0)}
          {component.renderSquare(1)}
          {component.renderSquare(2)}
        </div>
        <div className="board-row">
          {component.renderSquare(3)}
          {component.renderSquare(4)}
          {component.renderSquare(5)}
        </div>
        <div className="board-row">
          {component.renderSquare(6)}
          {component.renderSquare(7)}
          {component.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
