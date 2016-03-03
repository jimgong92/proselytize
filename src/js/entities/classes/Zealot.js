import Character from '../Character';

class Zealot extends Character {
  constructor(config) {
    super(config);
    this.MAX_MOVES = this.movesRemaining = 1;
    this.MAX_FAITH = this.faithRemaining = 20;
    this.BASE_DAMAGE = 10;
    this.BASE_DEFENSE = 5;
  }
}

export default Zealot;
