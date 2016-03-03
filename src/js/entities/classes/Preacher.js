import Character from '../Character';

class Preacher extends Character {
  constructor(config) {
    super(config);
    this.MAX_MOVES = this.movesRemaining = 2;
    this.MAX_FAITH = this.faithRemaining = 20;
    this.BASE_DAMAGE = 10;
    this.BASE_DEFENSE = 0;
  }
}

export default Preacher;
