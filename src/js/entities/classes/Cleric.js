import Character from '../Character';

class Cleric extends Character {
  constructor(config) {
    super(config);
    this.MAX_MOVES = this.movesRemaining = 2;
    this.MAX_FAITH = this.faithRemaining = 20;
    this.BASE_DAMAGE = 5;
    this.BASE_DEFENSE = 2;
  }
}

export default Cleric;
