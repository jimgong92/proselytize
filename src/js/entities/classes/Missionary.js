import Character from '../Character';

class Missionary extends Character {
  constructor(config) {
    super(config);
    this.MAX_MOVES = this.movesRemaining = 4;
    this.MAX_FAITH = this.faithRemaining = 20;
    this.BASE_DAMAGE = 3;
    this.BASE_DEFENSE = 0;
  }
}

export default Missionary;
