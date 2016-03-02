class Battle {
  constructor(config = Battle.defaultConfig) {
    const { BOARD_SIZE, playerChars, invaderChars } = Battle.defaultConfig;
    this.BOARD_SIZE = config.BOARD_SIZE || BOARD_SIZE;
    this.playerChars = config.playerChars || playerChars;
    this.invaderChars = config.invaderChars || invaderChars;
    this.board = this.initBoard();
  }
  initBoard() {
    const board = createBoard(this.BOARD_SIZE);
    for (let i = 0; i < this.invaderChars.length; i++) {
      board[0][(i * 2) + 1] = this.invaderChars[i];
    }
    for (let i = 0; i < this.playerChars.length; i++) {
      board[this.BOARD_SIZE - 1][(i * 2) + 1] = this.playerChars[i];
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

Battle.defaultConfig = {
  BOARD_SIZE: 11,
  playerChars: [],
  invaderChars: []
};

export default Battle;
