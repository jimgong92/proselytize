class Character {
  constructor(config) {
    this.MAX_MOVES = this.movesRemaining = 1;
    this.MAX_FAITH = this.faithRemaining = 1;
    this.BASE_DAMAGE = 1;
    this.BASE_DEFENSE = 0;
    this.name = config ? config.name : 'Robert Paulson';
    this.faithType = config ? config.faithType : null;
    this.location = config ? config.location : null;
    this.weapon = config ? config.weapon : null;
    this.armor = config ? config.armor : null;
    this.board = config ? config.board : null;
  }
  move(r, c) {
    if (!this.movesRemaining) return;

    let { row, col } = this.location;
    const xDiff = Math.abs(c - col);
    const yDiff = Math.abs(r - row);
    if (xDiff < 2 && yDiff < 2 && (xDiff + yDiff) > 0) {
      this.movesRemaining--;
      this.location = { row: r, col: c };
      this.board[r][c] = this;
    }
  }
  attack() {}
  special() {}
}

export default Character;