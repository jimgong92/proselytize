import React, { Component, PropTypes } from 'react';

class Board extends Component {
  render() {
    const board = this.props.board;
    const rows = board.map((row, r) => {
      const cells = row.map((value, c) => {
        let entityName = 'empty';
        if (value) {
          entityName = value.constructor.name;
        }
        return (
          <td
            key={ `${entityName}_(${c},${r})` }
            className="board-cell"
            data={ value }
          >
            { entityName }
          </td>
        )
      });
      return (<tr className="board-row" key={`board_row_${r}`}>{ cells }</tr>);
    });
    
    return (
      <table>
        <tbody>
          { rows }
        </tbody>
      </table>
    );
  }
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired
};

export default Board;
