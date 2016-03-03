class Battle {
  constructor(config) {
    const { BOARD_SIZE, playerChars, invaderChars } = config;
    this.BOARD_SIZE = BOARD_SIZE || 11;
    this.playerChars = playerChars || [];
    this.invaderChars = invaderChars || [];
    this.board = this.initBoard();
  }
  initBoard() {
    const board = createBoard(this.BOARD_SIZE);
    for (let i = 0; i < this.invaderChars.length; i++) {
      const invader = this.invaderChars[i];
      const {row, col} = { row: 0, col: (i * 2) + 1 };
      invader.board = board;
      invader.location = { row, col }
      board[row][col] = invader;
    }
    for (let i = 0; i < this.playerChars.length; i++) {
      const playerChar = this.playerChars[i];
      const {row, col} = { row: this.BOARD_SIZE - 1, col: (i * 2) + 1 };
      playerChar.board = board;
      playerChar.location = { row, col }
      board[row][col] = playerChar;
    }
    return board;
  }
}

function createBoard(size) {
  const board = [];
    for (let r = 0; r < size; r++) {
      const row = [];
      for (let c = 0; c < size; c++) row.push(null);
      board.push(row);
    }
  return board;
}

export default Battle;
